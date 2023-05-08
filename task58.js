//Twice as old
//Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as
// old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(d, s) {
    let age2 =  s * 2
    if (age2 > d) {
        return age2 - d
    } else {
        return d - age2
    }
}