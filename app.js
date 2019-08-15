'use strict';

// Create an application folder called app
// Connect your app to the socket.io server
// Refactor the app to be modular, testable, and clean
// Read/Write should be done in promises, not callbacks
// File Reading/Writing/Uppercasing should happen in one module
// Each operation should be in a separate function
// Rather than throwing errors and console.log() inline, fire file-error and file-save events to the server that you connected to

const io = require('socket.io-client')
const socket = io.connect('http://209.210.157.165:3000');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.readFile);

const alterFile = (file) => {
  fs.readFile( 'files/test.txt', (err, data) => {
    if(err) { throw err; }
    let text = data.toString().toUpperCase();
    fs.writeFile( 'files/test.txt', Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};

// const loadFile = (file) => readFile(file);
// const saveFile = (file, buffer) => writeFile(file, buffer);
// const convertBuffer = buffer => Buffer.from( buffer.toString().toUpperCase());

// const alterFile = (file) => {
//   return loadFile(file)
//     .then(contents => convertBuffer(contents))
//     .then(buffer => saveFile(file, buffer))
//     .then(() => socket.on(`file-save ${file}`))
//     .catch(error => socket.on(`file-error ${error}`));
// };

let file = process.argv.slice(2).shift();
alterFile(file);
