// Flag that warns and prohibits bad quality JS Code from being compiled/executed
'use strict'

// Importing File System library for file manipulation
const fs = require('fs');

// Importing Path library for file path manipulation
const path = require('path');

// We assign the directory name onto the "__dirname" const
const dir = process.argv[2];

// We assign the file extension value to filter by onto the "__extname" const
const ext = process.argv[3];

// We execute the function of directory reading
fs.readdir(dir, 
    // Execute the function and if there is an error during the directory reading...
    function (err, list) {
        // We log the error onto the console/terminal
        if(err) return console.log(err);

        /* Else, we iterate through the file list and console log
        only the files that contain the desired extension */
        for(let i = 0; i <= list.length; i++){
            if(path.extname(list[i]) === `.${ext}`){
                console.log(list[i])
            }
        }
    }
)

// ---

// Official solution

// 'use strict'
//     const fs = require('fs')
//     const path = require('path')

//     const folder = process.argv[2]
//     const ext = '.' + process.argv[3]

//     fs.readdir(folder, function (err, files) {
//       if (err) return console.error(err)
//       files.forEach(function (file) {
//         if (path.extname(file) === ext) {
//           console.log(file)
//         }
//       })
//     })