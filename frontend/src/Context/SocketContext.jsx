import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = SocketContextProvider;

export default function SocketContextProvider({ children }) {
    const [socket, setSocket] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Initializing socket connection...");

        const rawURL = (import.meta.env.VITE_SOCKET_URL || (import.meta.env.DEV ? 'http://localhost:3001' : '')).replace(/\/$/, '');
        const socketURL =
            import.meta.env.VITE_SOCKET_URL ||
            (import.meta.env.DEV ? 'http://localhost:3001' : '');

        if (!socketURL) {
            console.error('VITE_SOCKET_URL is not set in production.');
            setLoading(false);
            return;
        }
        console.log("Connecting to socket server at:", socketURL);

        try {
            const socketConnection = io(rawURL, {
                path: '/socket.io',
                transports: ['websocket', 'polling'],
                reconnection: true,
                reconnectionAttempts: 10,
                reconnectionDelay: 1000,
                withCredentials: false
            });

            socketConnection.on('connect', () => {
                console.log('Connected to socket server with ID:', socketConnection.id);
                setSocket(socketConnection);
                setLoading(false);
            });

            socketConnection.on('connect_error', (err) => {
                console.error('Socket connection error:', err);
                setLoading(false);
            });

            return () => {
                console.log("Cleaning up socket connection");
                socketConnection.disconnect();
            };
        } catch (error) {
            console.error("Error initializing socket:", error);
            setLoading(false);
        }
    }, []);

    const contextValue = {
        socket,
        loading
    };

    return (
        <SocketContext.Provider value={contextValue}>
            {children}
        </SocketContext.Provider>
    );
}