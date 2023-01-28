// Complete the function that

// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.



var solution = function(firstArray, secondArray) {
    return firstArray.map((a, b) => Math.pow(Math.abs(secondArray[b]-a),2)).reduce((a,b) =>a+b,0)/firstArray.length
  }