//Quadrants
//Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer).
// x and y are non-zero integers, therefore the given point never lies on the axes.

// function quadrant(x, y) {
//     if (x > 0 && y > 0) {
//         return 1;
//     } else if (x < 0 && y > 0) {
//         return 2;
//     } else if (x < 0 && y < 0) {
//         return 3;
//     } else {
//         return 4;
//     }
// }

// function quadrant(x, y) {
//     return ["11","-11","-1-1","1-1"].indexOf(`${Math.sign(x)}${Math.sign(y)}`) + 1;
// }

function quadrant(x, y) {
    return [1, 2, 4, 3][2*(y < 0) + (x < 0)];
}

