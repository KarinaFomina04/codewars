// You just got done with your set at the gym, and you are wondering 
// how much weight you could lift if you did a single repetition. Thankfully, 
// a few scholars have devised formulas for this purpose (from Wikipedia) :
// 1RM = (w *(1 + (r/30)
// 1RM = 100 * w/(101.3 - (2.67123 * r))
// 1RM = w * (r**0.10)
// Your function will receive a weight w and a number of repetitions r and must 
// return your projected one repetition maximum. Since you are not sure which 
// formula to use and you are feeling confident, your function will return the 
// largest value from the three formulas shown above, rounded to the nearest integer. 
// However, if the number of repetitions passed in is 1 (i.e., it is already a one rep max), 
// your function must return w. Also, if the number of repetitions passed in is 0 
// (i.e., no repetitions were completed), your function must return 0.



function calculate1RM(w, r) {
  const oneRM_1 = Math.round(w *(1 + (r/30)))
  const oneRM_2 = Math.round(100 * w/(101.3 - (2.67123 * r)))
  const oneRM_3 = Math.round(w * (r**0.10))
  
  const arr = [oneRM_1, oneRM_2, oneRM_3]
  const final_namb = getMaxOfArray(arr)

  if (r == 1) {
    return w
  }
  if (r == 0) {
    return r
  }
  
  return final_namb
}
function getMaxOfArray(numArray) {
return Math.max.apply(null, numArray);
}

  console.log(calculate1RM(360, 1))