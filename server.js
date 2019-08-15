'use strict';

// Create a socket.io server in a new folder called server
// Setup listeners for file-save and file-error events
// When they occur, emit() the appropriate event and payload to clients (specficially, the ‘logger’ will pick this up)

const io = require('socket.io')(3000);

io.on('connection', (socket) => {
  console.log('Welcome', socket.id);
  socket.on('file-save', (payload) => {
    console.log(`Saved: ${payload}`);
    socket.broadcast.emit('file-save', payload);
  })
  socket.on('file-error', (payload) => {
    console.log(`Error: ${payload}`);
    socket.broadcast.emit('file-error', payload);
  })
});