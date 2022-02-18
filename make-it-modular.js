// Flag that warns and prohibits bad quality JS Code from being compiled/executed
'use strict'

// Importing the modular function from the other file
const filterFn = require('./mymodule')

// We assign the directory name onto the "dir" const
const dir = process.argv[2]

// We assign the file extension value to filter by onto the "ext" const
const ext = process.argv[3]

// Executing the filter function the we imported
filterFn(dir, ext, function (err, list) {

  // If there's an error, console log the error message   
  if (err) return console.error('There was an error:', err);

  // If not, console log the filtered file names  
  for(let i = 0; i <= list.length; i++){
    if(String(list[i]) !== "undefined"){
        console.log(`${list[i]}`);
    }
  }

})