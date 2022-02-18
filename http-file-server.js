// Flag that warns and prohibits bad quality JS Code from being compiled/executed
'use strict'

// Importing HTTP library for requests, server creation and manipulation
const http = require('http');

// Importing File System library for file manipulation
const fs = require('fs');

// Instanciating server
const server = http.createServer((req, res) => {

    // Getting the file from the second command-line argument
    const fileName = process.argv[3];

    // This line opens the file as a readable stream
    const readStream = fs.createReadStream(fileName);

    // This will wait until we know the readable stream is actually valid before piping
    readStream.on('open', function () {
        // This just pipes the read stream to the response object (which goes to the client)
        readStream.pipe(res);
    });

    // This catches any errors that happen while creating the readable stream (usually invalid names)
    readStream.on('error', function(err) {
        res.end(err);
    });

})

server.listen(Number(process.argv[2]));

// ---

// Official Answer

// 'use strict'
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'content-type': 'text/plain' })

//     fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))