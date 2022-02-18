// Flag that warns and prohibits bad quality JS Code from being compiled/executed
'use strict'

// Importing BL library for data request streaming
const bl = require('bl');

// Importing HTTP library for requests
const http = require('http');

// Array where we'll store the results
let results = [];

/* Variable where we'll count the ammount
   of get requests already made */
let count = 0;

function httpGET(i){
    // Executing the GET request
    http.get(process.argv[2+i], function (response) {
    
        // Piping all the data through a single stream
        response.pipe(bl(function(err, data){
    
            // If there is an error, Console.error the error events
            if(err) return console.error(err.toString());
    
            // If not, we'll push the result into the array
            // based on the request order, and not the response order
            results[i] = data.toString();

            // Uptick the counter
            count++;

            // If all requests are finished, console.log them all, on after the other
            if(count === 3) for(let i=0; i<=2; i++) console.log(results[i]);
    
        }))
    
    }).on('error', console.error);
}

// Iterating through the command-line arguments and executing the requests
for (let i=0; i<=2; i++) httpGET(i);