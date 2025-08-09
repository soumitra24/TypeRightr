const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();

// Allow origins via env (comma-separated)
const allowedOrigins = (process.env.ALLOWED_ORIGINS || [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://typerightr.vercel.app' // Vercel frontend
].join(',')).split(',');

// REST CORS
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST'],
  credentials: false
}));

// Health
app.get('/health', (_req, res) => res.status(200).send('ok'));

const server = http.createServer(app);

// Socket.IO with same CORS + path
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
    credentials: false
  },
  path: '/socket.io'
});

const MULTIPLAYER_TIME = 30;
const rooms = {};

io.on('connection', (socket) => {
  console.log(`[socket] connected: ${socket.id}`);

  socket.on('findMatch', () => {
    console.log(`User ${socket.id} is looking for a match.`);
    let joinedRoom = false;

    for (const roomId in rooms) {
      if (rooms[roomId] && rooms[roomId].players.length === 1) {
        const roomTime = MULTIPLAYER_TIME; // Always 30s
        socket.join(roomId);
        rooms[roomId].players.push(socket.id);
        console.log(`User ${socket.id} joined existing room ${roomId} (${roomTime}s).`);

        // Assign paragraph text using the imported function
        rooms[roomId].text = getRandomParagraph(); // <--- USE IMPORTED FUNCTION

        io.to(roomId).emit('matchFound', {
          roomId,
          players: rooms[roomId].players,
          time: roomTime
        });
        io.to(roomId).emit('gameStart', {
          text: rooms[roomId].text, // Send the fetched text
          time: roomTime
        });
        console.log(`Game starting in room ${roomId} for ${roomTime}s`);
        joinedRoom = true;
        break;
      }
    }

    if (!joinedRoom) {
      const newRoomId = `room_${socket.id}`;
      socket.join(newRoomId);
      // No text needed until second player joins
      rooms[newRoomId] = { players: [socket.id], text: null };
      console.log(`User ${socket.id} created and joined new room ${newRoomId}`);
      socket.emit('waitingForOpponent', { roomId: newRoomId });
    }
  });

  socket.on('typingUpdate', (data) => {
    if (data.roomId && rooms[data.roomId]) {
      socket.to(data.roomId).emit('opponentProgress', { userId: socket.id, progress: data.progress });
    }
  });

  socket.on('gameFinished', (data) => {
    if (data.roomId && rooms[data.roomId]) {
      // <<< LOG RECEIVED EVENT >>>
      console.log(`[Server] Received 'gameFinished' from ${socket.id} in room ${data.roomId}. Stats:`, data.stats);
      // Emit to OTHERS in the room
      socket.to(data.roomId).emit('opponentFinished', { userId: socket.id, stats: data.stats });
      // <<< LOG EMITTED EVENT >>>
      console.log(`[Server] Emitted 'opponentFinished' to room ${data.roomId} for user ${socket.id}.`);
    } else {
      console.warn(`[Server] Received 'gameFinished' for invalid/unknown room: ${data.roomId}`);
    }
  });

  socket.on('disconnect', (reason) => {
    console.log(`User disconnected: ${socket.id}, Reason: ${reason}`);
    let roomToDelete = null;
    for (const roomId in rooms) {
      if (rooms[roomId]) {
        const playerIndex = rooms[roomId].players.indexOf(socket.id);
        if (playerIndex !== -1) {
          console.log(`User ${socket.id} was in room ${roomId}`);
          // Ensure room still exists before emitting
          if (rooms[roomId]) {
               socket.to(roomId).emit('opponentLeft');
          }
          roomToDelete = roomId;
          break;
        }
      }
    }
    if (roomToDelete && rooms[roomToDelete]) {
         console.log(`Removing room ${roomToDelete} due to disconnect`);
         delete rooms[roomToDelete];
    }
  });
});

// Remove the local getRandomParagraph function if it exists here

// Start
const PORT = process.env.PORT || 3001;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on ${PORT}`);
});