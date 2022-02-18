// Flag that warns and prohibits bad quality JS Code from being compiled/executed
'use strict'

// Importing BL library for data request streaming
const bl = require('bl');

// Importing HTTP library for requests
const http = require('http');

// Executing the GET request
http.get(process.argv[2], function (response) {

    // Piping all the data through a single stream
    response.pipe(bl(function(err, data){

        // If there is an error, Console.error the error events
        if(err) return console.error(err.toString());

        // Console.log the data events length
        console.log(data.toString().length);

        // Console.log the data events
        console.log(data.toString());

    }))

}).on('error', console.error)
