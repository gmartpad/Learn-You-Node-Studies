// Flag that warns and prohibits bad quality JS Code from being compiled/executed
'use strict'

// The let variable that will hold the sum of all numeric argument values
let result = 0

// for loop that will iterate and sum through all numeric argument values
for (let i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i])
}

// console.log that will show us the sum of all numeric argument values
console.log(result)

// ---

// Alternative solution

// let allItems = process.argv;
// allItems.splice(0, 2);
// const total = allItems.reduce((accumulator, value) => parseInt(accumulator) + parseInt(value)) 
// console.log(total);