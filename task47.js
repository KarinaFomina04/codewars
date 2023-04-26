//Hello World - Without Strings

//You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings.
// This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.




const helloWorld = () => {
    let str = String.fromCharCode(72 , 101 , 108, 108, 111 , 44 , 32 ,87, 111, 114 , 108 , 100, 33)
    return str;
};