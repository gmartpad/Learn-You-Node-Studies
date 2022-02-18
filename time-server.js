// Flag that warns and prohibits bad quality JS Code from being compiled/executed
'use strict'

// Importing libary for server instanciation and listening
const net = require('net');

// Function that pads value up to 2 characters with zeroes
function padTime(value){
    return value.toString().padStart(2, "0");
}

// Functions that returns the current date in "YYYY-MM-DD hh:mm" format
function now(){
    const d = new Date();
    return `${d.getFullYear()}-${padTime(d.getMonth()+1)}-${padTime(d.getDate())} ${d.getHours()}:${padTime(d.getMinutes())}`;
}

// Instanciating server and sending the current time to be logged in the console/terminal
const server = net.createServer(function (socket) {
    socket.end(`${now()}\n`);
}) 

// Telling the server to listen to the port served as the command-like first argument
server.listen(Number(process.argv[2]))