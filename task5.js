// This kata is about multiplying a given number by eight if 
//it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if (number % 2 === 0) {
        return number * 8
      }else {
        return number * 9
      }
  }


simpleMultiplication(1)
simpleMultiplication(8)
simpleMultiplication(4)
simpleMultiplication(5)