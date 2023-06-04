//Array Deep Count

//You are given an array. Complete the function that returns the number of ALL elements within an array,
// including any nested arrays.

// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
function deepCount(a) {
    let count = 0
    for(let el of a){
        count += 1
        if(Array.isArray(el)){
            count += deepCount(el)
        }
    }
    return count
}