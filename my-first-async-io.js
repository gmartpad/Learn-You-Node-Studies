// Flag that warns and prohibits bad quality JS Code from being compiled/executed
'use strict'

// Importing File System library for file manipulation
const fs = require('fs')

// We assign the file name value onto the "file" const.
const file = process.argv[2]

// We read the file
fs.readFile(file, 
    // Execute the function and if there is an error during the file reading...
    function (err, contents) {
        // We log the error onto the console/terminal
        if (err) {
            return console.log(err)
        }

    /* Else, we turn the content of the file into a string, 
       and get the sum count of all new lines present in that file
       and we assign that sum value onto the "lines" const */

    // fs.readFile(file, 'utf8', callback) can also be used
    const lines = contents.toString().split('\n').length - 1

    // console.log that will show us the count of all new lines
    console.log(lines)
})

//---------------------

// Alternative solution

// 'use strict'
// const fs = require('fs')

// var lines = undefined

// function getLines(callback){
//     fs.readFile(process.argv[2], (err, buffer) => {
//         const linesCount = buffer.toString().split('\n').length - 1;
//         lines = linesCount;
//         callback();
//     })
// }

// function logLines(){
//     console.log(lines)
// }

// getLines(logLines);