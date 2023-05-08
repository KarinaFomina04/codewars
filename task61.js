//Grasshopper - Check for factor

// For example 2 is not a factor of 7 because: 7 % 2 = 1
// Note: base is a non-negative number, factor is a positive number.
function checkForFactor (base, factor) {
    return base % factor === 0
}