const perf = require("execution-time")();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// How long does it take to double every number in a given array?
// The time it takes to double every number in a given array depends on the size of the array, the available computational resources, and the specific implementation of the function.

// Try it with first function
perf.start(); // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

// console.log("Results for the extraLargeArray");
// console.log("insert", resultsInsert.preciseWords);
// console.log("append", resultsAppend.preciseWords);

// array of the different sized arrays to test
const arraysToTest = [
  { name: "Tiny Array", array: tinyArray },
  { name: "Small Array", array: smallArray },
  { name: "Medium Array", array: mediumArray },
  { name: "Large Array", array: largeArray },
  { name: "Extra Large Array", array: extraLargeArray },
];

// loop over each array and measure the time for both functions
for (let { name, array } of arraysToTest) {
  console.log(`Results for ${name}`);

  perf.start();
  doublerAppend(array);
  let resultsAppend = perf.stop();
  console.log("append", resultsAppend.time.toFixed(6), "ms"); // Output time in milliseconds

  perf.start();
  doublerInsert(array);
  let resultsInsert = perf.stop();
  console.log("insert", resultsInsert.time.toFixed(6), "ms"); // Output time in milliseconds

  console.log("\n"); // add an extra newline for readability
}
