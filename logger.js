'use strict';

// Create a socket.io server for logging in a new folder called logger
// Connect the logger to the socket.io server
// Listen for file-save and file-error events
// console.log() both error and save messages

const io = require('socket.io-client')

const socket = io.connect('http://209.210.157.165:3000');

socket.on('file-save', (payload) => {
  console.log(`${payload} was saved`);

socket.on('file-error', (payload) => {
  console.log(`Error`);
})
});