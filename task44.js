//Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//
//     For example, a tower with 3 floors looks like this:
//
// [
//     "  *  ",
//     " *** ",
//     "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//     "     *     ",
//     "    ***    ",
//     "   *****   ",
//     "  *******  ",
//     " ********* ",
//     "***********"
// ]


function towerBuilder(n) {
    let tower = [];
    for (let i = 0; i < n; i++) {
        let spaces = " ".repeat(n - i - 1);
        let stars = "*".repeat(2*i + 1);
        tower.push(spaces + stars + spaces);
    }
    return tower;
}


towerBuilder(1)
towerBuilder(2)
towerBuilder(3)