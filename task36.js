//Geometry Basics: Distance between points in 2D


// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have attributes x and y.

// Write a function calculating distance between Point a and Point b.

// Tests compare expected result and actual answer with tolerance of 1e-6.
//AB = √(x.b - x.a)**2 + (y.b - y.a)**2

function distanceBetweenPoints(a, b) {
    return Math.sqrt((b.x - a.x)**2 + (b.y - a.y)**2)
  }
  