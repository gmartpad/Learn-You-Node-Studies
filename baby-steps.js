'use strict'

let result = 0

for (let i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i])
}

console.log(result)

// let allItems = process.argv;

// allItems.splice(0, 2);

// const total = allItems.reduce((accumulator, value) => parseInt(accumulator) + parseInt(value)) 

// console.log(total);