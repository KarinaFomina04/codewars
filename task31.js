//Exclusive "or" (xor) Logical Operator

// Since we cannot define keywords in Javascript (well, at least I don't know how to do it),
// your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated.
// Your xor function should have the behaviour described above, returning true if exactly one of the
// two expressions evaluate to true, false otherwise.

// function xor(a, b) {
//     return a === b? false: true
// }
function xor(a, b) {
    return a !== b
}


console.log(xor(false, false))
xor(true, false)
xor(false, true)
xor(true, true)
xor(true, true)