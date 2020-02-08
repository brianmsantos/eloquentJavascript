// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

//Looping a # triangle
//1st setup the index
//2nd checks the condition
//3rd updates the index
for (let hash = "#"; hash.length < 8; hash += "#")
console.log(hash);

// //Fizzbuzz from 1-100
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

//1st setup the index, check the condition, and update the index(1, less than 100, and increment by 1)
//2nd needs a conditional statemment to check which numbers are divisible by 3, 5, and both 3 and 5
//3rd anything that is not divisible by 3, 5, or both must console log the number using concatenation

for (let i = 1; i < 100; i++) {
  if(i % 3 === 0 && i % 5 === 0){
    console.log("Fizzbuzz");
  } else if(i % 3 === 0){
    console.log("Fizz");
  } else if (i & 5 === 0){
    console.log("Buzz");
  } else {
    console.log("Value is " + i);
  }
}

// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #

let hash = "#"
let space = " "
let line = 8

