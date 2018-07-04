var express = require('express');
var app = express();
var shell = require('shelljs');

app.get('/', (req, res) => {
  res.send("This is the Porton Health Sessions Socket.io Server. Please use porton 9001 as the socketURL.");
});

console.log("__dirname = " + __dirname);

// node node_modules/rtcmulticonnection/server.js

shell.exec('node node_modules/rtcmulticonnection/server.js --ssl', function(code, stdout, stderr) {
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);
});