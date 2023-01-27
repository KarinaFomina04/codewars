// I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.

// For example:

//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.


function nthFibo(n) {
    let prev = 0;
    let next = 1;
    for(let i = 2; i <= n; i++){
        next = prev + next;
        prev = next - prev;
    }
    return prev;
  }


  console.log(nthFibo(4))