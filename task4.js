// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.

function otherAngle(a, b) {
    const c = 180 - (a + b)
    return c
  }

  console.log(otherAngle(30, 60))
  console.log(otherAngle(90, 20))
  console.log(otherAngle(75, 33))