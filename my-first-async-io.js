'use strict'
const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
    if (err) {
    return console.log(err)
    }
    // fs.readFile(file, 'utf8', callback) can also be used
    const lines = contents.toString().split('\n').length - 1
    console.log(lines)
})

//---------------------

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