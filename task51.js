//Grouping in string
//In this kata you have to find whether same elements of the string are grouped together.
//In first example same elements are grouped together: (11)(22)(33), hence it should return true
//In the second example there are two different groups of 1's: (11)2233(11), hence it should return false


const isConsecutive = (str) => {
    const groups = [];
    let currentGroup = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === currentGroup[0]) {
            currentGroup += char;
        } else {
            groups.push(currentGroup);
            currentGroup = char;
        }
    }

    groups.push(currentGroup);
    return groups.every((group, index) => groups.indexOf(group) === index);
};

isConsecutive("1222334556667")// true
isConsecutive("001234400522") //false