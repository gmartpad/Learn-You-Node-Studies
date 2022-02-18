// Importing File System library for file manipulation
const fs = require('fs')

// Importing Path library for file path manipulation
const path = require('path')

module.exports = function (dir, ext, callback) {

// Reading the directory
  fs.readdir(dir, function (err, list) {

    // If there's an error, send error to the callback function  
    if (err) return callback(err);

    // Create empty array where we'll store the filtered file names
    let extList = [];

    // Filtering and pushing
    for(let i = 0; i <= list.length; i++){        
        if(path.extname(String(list[i])) === `.${ext}`){
            extList.push(list[i])
        }
    }

    // Executing the callback
    callback(null, extList)
  })
}