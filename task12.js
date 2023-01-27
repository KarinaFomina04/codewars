// This kata will return a string that represents the difference of two perfect squares as the sum of consecutive odd numbers.

// Specifications:

// • The first input minus the second input reveals the exact number of consecutive odd numbers required for the solution - you can check this in the examples below.

// • The first input will always be larger than the second.

// • All inputs will be valid so no need for error checking.

// • Outputs will always be positive.

// • Inputs will range between 0 and 200, (inclusive).

// • In the returned string there are spaces before and after the plus sign, the minus sign and the equals sign but nowhere else.

// Examples:

// squaresToOdd(9, 5) --> "9^2 - 5^2 = 11 + 13 + 15 + 17 = 56"

// squaresToOdd(10, 7) --> "10^2 - 7^2 = 15 + 17 + 19 = 51"

// squaresToOdd(100, 98) --> "100^2 - 98^2 = 197 + 199 = 396"

// squaresToOdd(100, 99) --> "100^2 - 99^2 = 199 = 199"

// More perfect code:
// function squaresToOdd(sqr1, sqr2){
//     const sub = (sqr1 ** 2) - (sqr2 ** 2)
//     let count;
//     for (let n = 1; n < sub; n++) {
//       if(sub%n==0 && sub/n > n - 1){
//         count = n
//       }
//     }
//     const a1 = (sub / count) - (count - 1)
//     let arr = []
//     for(let n = 0; n < count; n ++ ){
//       arr.push(a1 + (n * 2))
//     }
//     return `${sqr1}^2 - ${sqr2}^2 = ${arr.join(' + ')} = ${sub}`
//   }
//   console.log(squaresToOdd(63, 57))


  function squaresToOdd(sqr1, sqr2){
    const sub = (sqr1 ** 2) - (sqr2 ** 2)
    let count;
    for (let n = 1; n < sub; n++) {
      if(sub%n==0 && sub/n > n - 1){
        count = n;
        const a1 = (sub / count) - (count - 1);
        const an = a1 + 2*(count - 1);
        const sum = sqr1 + sqr2;        
        if (a1 < sum && sum < an) {
            break
        }
      }
    }
    let arr = []
    const a1 = (sub / count) - (count - 1);
    for(let n = 0; n < count; n ++ ){
      arr.push(a1 + (n * 2))
    }
    return `${sqr1}^2 - ${sqr2}^2 = ${arr.join(' + ')} = ${sub}`
  }
  console.log(squaresToOdd(63, 57))
