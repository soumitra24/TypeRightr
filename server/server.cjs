const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const { getRandomParagraph } = require('./MultiplayerPara.js');

const app = express();

// Allow origins via env (comma-separated)
const allowedOrigins = (process.env.ALLOWED_ORIGINS || [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://typerightr.vercel.app' // Vercel frontend
].join(',')).split(',');

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST'],
  credentials: false
}));

app.get('/health', (_req, res) => res.status(200).send('ok'));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: false
  },
  path: '/socket.io'
});

// --- Matchmaking state ---
const rooms = {}; // { [roomId]: { players: [id1, id2], text?: string } }
let waitingSocketId = null; // single waiting player

io.on('connection', (socket) => {
  console.log(`[socket] connected ${socket.id} via ${socket.conn.transport.name}`);

  socket.on('findMatch', () => {
    console.log(`[match] ${socket.id} requested match`);
    if (waitingSocketId && waitingSocketId !== socket.id && io.sockets.sockets.get(waitingSocketId)) {
      // Pair with waiting player
      const opponentId = waitingSocketId;
      waitingSocketId = null;

      const roomId = `room_${opponentId}_${socket.id}`;
      socket.join(roomId);
      io.sockets.sockets.get(opponentId)?.join(roomId);
      rooms[roomId] = { players: [opponentId, socket.id] };

      console.log(`[match] room ${roomId} with ${opponentId} & ${socket.id}`);

      if (rooms[roomId]) {
        const roomTime = 30; // or your configured time
        rooms[roomId].text = getRandomParagraph();

        io.to(roomId).emit('matchFound', {
          roomId,
          players: rooms[roomId].players,
          time: roomTime
        });

        io.to(roomId).emit('gameStart', {
          text: rooms[roomId].text,
          time: roomTime
        });
      }
    } else {
      // Put this socket in waiting queue
      waitingSocketId = socket.id;
      console.log(`[match] ${socket.id} waiting for opponent`);
      socket.emit('waitingForOpponent', { roomId: null });
    }
  });

  socket.on('typingUpdate', (data) => {
    if (data.roomId && rooms[data.roomId]) {
      socket.to(data.roomId).emit('opponentProgress', { userId: socket.id, progress: data.progress });
    }
  });

  socket.on('gameFinished', (data) => {
    if (data.roomId && rooms[data.roomId]) {
      console.log(`[Server] Received 'gameFinished' from ${socket.id} in room ${data.roomId}. Stats:`, data.stats);
      socket.to(data.roomId).emit('opponentFinished', { userId: socket.id, stats: data.stats });
      console.log(`[Server] Emitted 'opponentFinished' to room ${data.roomId} for user ${socket.id}.`);
    } else {
      console.warn(`[Server] Received 'gameFinished' for invalid/unknown room: ${data.roomId}`);
    }
  });

  socket.on('disconnect', (reason) => {
    console.log(`User disconnected: ${socket.id}, Reason: ${reason}`);
    if (waitingSocketId === socket.id) waitingSocketId = null;

    for (const roomId in rooms) {
      const r = rooms[roomId];
      if (!r) continue;
      const idx = r.players.indexOf(socket.id);
      if (idx !== -1) {
        socket.to(roomId).emit('opponentLeft');
        delete rooms[roomId];
        console.log(`[room] cleaned ${roomId}`);
      }
    }
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on ${PORT}`);
});