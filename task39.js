//Mysterious Singularity Numbers

//The point is that a natural number N (1 <= N <= 10^9) is given. You need to write a function which finds the
// number of natural numbers not exceeding N and not divided by any of the numbers [2, 3, 5].

    function realNumbers(n){
    return n - Math.floor(n/2) - Math.floor(n/3) + Math.floor(n/6) - Math.floor(n/5) + Math.floor(n/10) + Math.floor(n/15) - Math.floor(n/30);
}


console.log(realNumbers(9))