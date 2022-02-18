// Flag that warns and prohibits bad quality JS Code from being compiled/executed
'use strict'

// Importing HTTP library for requests, server creation and manipulation
const http = require('http')

// Importing map library to transform stream data
const map = require('through2-map')

var port = process.argv[2]

// Instanciating server
http.createServer(function (req, res) {
  
  // Check to see if request method is POST
  if (req.method === 'POST') {
  
    // Write request status and content type to response head
    res.writeHead(200, {'Content-Type': 'text/plain'})
    
    // Stream request to through2-map with pipe()
    req.pipe(map(function (chunk) {

      // Convert request to uppercase string
      return chunk.toString().toUpperCase()
      
      // Stream result to response with pipe()
    })).pipe(res)
  } else {

    // Write method not allowed error to response header if method not POST
    res.writeHead(405)
  }
}).listen(+port, function () {
  console.log('Server listening on http://localhost:%s', port)
})