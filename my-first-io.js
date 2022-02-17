// Flag that warns and prohibits bad quality JS Code from being compiled/executed
'use strict'

// Importing File System library for file manipulation
const fs = require('fs')

// We assign the Buffer object containing the file's content onto the "contents" const.
const contents = fs.readFileSync(process.argv[2])

/* We turn the Buffer into a String, and count all New Lines,
   and assign the count value onto the "lines" const */
const lines = contents.toString().split('\n').length - 1

// console.log that will show us the count of all new lines
console.log(lines)

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

// ---

// Alternative solution

// const fs = require('fs');
// let contentOfFile = fs.readFileSync(process.argv[2])
// let contentString = contentOfFile.toString();
// let numberOfNewLines = contentString.split('\n').length - 1;
// console.log(numberOfNewLines);