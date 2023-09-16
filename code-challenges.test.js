// ASSESSMENT 3: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

// Test:
// describe("fibonacci", () => {
//   it("returns an array containing the Fibonacci sequence", () =>{
//     const fibonacciLength1 = 6 // 6 is the length of the expected array 
//     // Expected output: [1, 1, 2, 3, 5, 8]
//     const fibonacciLength2 = 10 // 10 is the length of the expected array
//     // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//     expect(fibonacci(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
//     expect(fibonacci(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   })
// })

//Good Failure: ReferenceError: fibonacci is not defined
const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// Pseudo code:
// function name: fibonacci
// input: number, the length of the expected array
// output: an array with the values that follow the fibonacci rules
// process: create an array of nothing to hold the new array at the end, create a function involving a for loop to iterate through the length and stop once it hits the length of 6 and 10, number will be the parameter,
const fibonacci = (number) => {
const newArr = [1, 1]
  for(let i = 2; i < number; i++){
    const newNum = newArr[i-1] + newArr[i-2]
    newArr.push(newNum)
  }
  return newArr
}

console.log(fibonacci(fibonacciLength2))

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
//Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
//Test:
describe("weekArr", () => {
  it("returns an array of the values sorted from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
//     // Expected output: [15, 15, 20, 30, 30, 60, 90]
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]
    expect(weekArr(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(weekArr(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})
// Good Failure: ReferenceError: weekArr is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// function name: weekArr
// input: an object, studyMinutesWeek1, studyMinutesWeek2
// output: an array of the object values in the key:value pairs in order of least to greatest
// process: create a function, Object.values() to move the values of the key: value pairs of the object into an array, .sort() .toFixed() method 
const weekArr = (array) => {
  const values = Object.values(array)
    values.sort((a, b) => a - b)
  return values
  // Object.values(weekArr).sort((a, b) => a - b)
}
  const valuesSorted = weekArr(studyMinutesWeek1)
console.log(valuesSorted)

// I got it to console.log the expected output but wont pass the jest test. 

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe()
const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// Pseudo code:
