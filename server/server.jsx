// server.js or server.jsx
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let collaborators = [];

io.on('connection', (socket) => {
  console.log('New client connected');
  
  // Adding new collaborator
  collaborators.push(socket.id);
  io.emit('collaborators', collaborators);

  socket.on('draw', (data) => {
    io.emit('updateDrawing', data);
  });

  socket.on('disconnect', () => {
    collaborators = collaborators.filter(id => id !== socket.id);
    io.emit('collaborators', collaborators);
    console.log('Client disconnected');
  });
});

server.listen(4000, () => console.log('Listening on port 4000'));
