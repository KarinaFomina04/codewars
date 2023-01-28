//TODO

function sumIntervals(intervals) {
    for(i=0;i<intervals.length;i++) {
        let min = intervals[i];
        let index;
        for(j=i;j<intervals.length;j++) {
          if(min[0] > intervals[j][0]) {
            min = intervals[j];
            index = j;
          }
        }
        intervals[index] = intervals[i];
        intervals[i] = min;
      }
    
      for(i=0;i<intervals.length-1;i+=0) {
        if(intervals[i][1] <= intervals[i+1][0]) {
          i++;
          continue;
        } else {
          intervals[i+1][0] = (intervals[i][0] <= intervals[i+1][0]) ? intervals[i][0] : intervals[i+1][0];
          intervals[i+1][1] = (intervals[i][1] >= intervals[i+1][1]) ? intervals[i][1] : intervals[i+1][1];
          intervals.splice(i,1);
        }
      }

    let sum = 0
    for (let i = 0; i < intervals.length; i++) {
        sum += intervals[i][1] - intervals[i][0]
    }

    
    return sum;
}

var s_time = performance.now()

console.log(sumIntervals( [
    [0, 20],
    [-1e8, 10],
    [30, 40]
 ] ))

 var dur = performance.now() - s_time
console.log(dur)