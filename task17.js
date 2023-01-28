// It's 9 time!

// I want to count from 1 to n. How many times will I use a '9'?

// 9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc

// Note: n will always be a positive integer.

// Examples (input -> output)
// 8  -> 0
// 9  -> 1
// 10 -> 1
// 98 -> 18
// 100 -> 20




function number9(n) {
    let sum = 0;
    for (let i = 1; i < n; i *= 10) {
        sum += Math.floor(n /  (i * 10)) * i + countIncompletePass(n, i)
    }
    return sum

}
function countIncompletePass(n, i) {
    const border = 9 * i
    let incompletePass = n % (i * 10)
    if (incompletePass < border) {
        return 0
    }
    return (incompletePass + 1) % border

}
console.log(number9(565754))