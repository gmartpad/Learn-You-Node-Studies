// Official Answer

// Flag that warns and prohibits bad quality JS Code from being compiled/executed
'use strict'

// Importing HTTP library for requests
const http = require('http')

// Executing the GET request
http.get(process.argv[2], function (response) {

    /* Setting the encoding of the response to 'utf8'
       So the "data" events will emit Strings rather
       than Buffers */
    response.setEncoding('utf8')

    // Console.log the data events
    response.on('data', console.log)

    // Console.error the error events
    response.on('error', console.error)

}).on('error', console.error)

// ---

// My Answer

// // Flag that warns and prohibits bad quality JS Code from being compiled/executed
// 'use strict';

// // Importing HTTP library for requests
// const http = require('http');

// // We assign the url on which we'll execute the GET request onto the "dir" const
// const url = process.argv[2];

// // Executing the GET request
// http.get(url, (res) => {

//     /* Setting the encoding of the response to 'utf8'
//        So the "data" events will emit Strings rather
//        than Buffers */
//     res.setEncoding('utf8');

//     // Console.log data the events
//     res.on('data', (data) => {
//         console.log(data)
//     })
// })