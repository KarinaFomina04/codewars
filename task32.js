//ASCII Total

//You'll be given a string, and have to return the sum of all characters as an int.
// The function should be able to handle all printable ASCII characters.

function uniTotal (string) {
    let count = 0
    for(let i = 0; i < string.length; i++){
        count += string.charCodeAt(i)
    }
    return count
}

uniTotal("");
uniTotal("a");
uniTotal("b");
uniTotal("c");
uniTotal("d");
