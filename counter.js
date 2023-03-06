function countDown (n) {
    while (n >= 0){
        n--;
    }
    return n;
}
console.log(countDown(3))


function countDownRecurs (n) {
    if(n ===0){
        return 0
    } else{
        return countDown(n - 1)
    }
}

console.log(countDownRecurs(3))