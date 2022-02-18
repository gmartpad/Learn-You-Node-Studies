// Flag that warns and prohibits bad quality JS Code from being compiled/executed
'use strict'

// Importing HTTP library for requests, server creation and manipulation
const http = require('http');

// Importing URL library for URL resolution and parsing
const url = require('url');

// Function for receiving time object, and returning it parsed
function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

// Function for receiving time object, and returning that value in UNIX Time
function unixtime (time) {
  return { unixtime : time.getTime() }
}

// Instantiating the server
const server = http.createServer(function (req, res) {
   
  // URL object obtained from parsed url 
  const parsedUrl = url.parse(req.url, true);

  /* Getting the datetime object out of instantiating
     new Date from the time value present in the parsed URL */   
  const time = new Date(parsedUrl.query.iso);

  // Setting result to undefined, so we'll define it later.   
  let result = undefined

  // If the URL that we receive from the request is api parsetime
  // we parse the time  
  if (/^\/api\/parsetime/.test(req.url))
    result = parsetime(time)
  // If not, we turn it into UNIX time   
  else if (/^\/api\/unixtime/.test(req.url))
    result = unixtime(time)

  // If the result is not undefined...   
  if (result) {
    // We return a successful header, in the type of a json, and send back the time value.
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    // If not, we return an error header, and send nothing back
    res.writeHead(404)
    res.end()
  }
})

// The server is listening to the port that was the first command-line argument
server.listen(Number(process.argv[2]))