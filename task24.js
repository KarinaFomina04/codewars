//Credit Card Mask



// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question 
// is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.


function maskify(str) {
    const replacer = "#";
    const len = 4;
    if (str.length > 4) {
        return replacer.repeat(str.length - len) + str.slice(-len);
    }
        return str
}


console.log(maskify('4556364607935616')) // '############5616'
console.log(maskify('1')) // '1'
console.log(maskify('11111')) //'#1111'
