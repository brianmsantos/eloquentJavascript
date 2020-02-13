// Minimum
// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

function returnMin (a, b){
  //if a < b return a otherwise return b
  return a<b ? a:b;
};

console.log (returnMin(1,2))