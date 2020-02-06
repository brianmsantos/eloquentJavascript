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

//Fizzbuzz from 1-100

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

// for (var n = 1; n <= 100; n++) {
//   var output = "";
//   if (n % 3 == 0)
//     output += "Fizz";
//   if (n % 5 == 0)
//     output += "Buzz";
//   console.log(output || n);
// }
