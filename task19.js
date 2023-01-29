

function sumIntervals(intervals) {
    let firstSum = intervals[0][1] - intervals[0][0]
    let sum = intervals[0][1] - intervals[0][0];
    console.log(sum, 'sum');
    for (let i = 0; i < intervals.length; i++) {
        if (i === 1 && firstSum === sum) {
            return sum;
        }
        for (let j = i+1; j < intervals.length; j++) {
            //console.log('changed sum', sum)
            if(intervals[i][0] < intervals[j][0] && intervals[i][1] > intervals[j][0]) { // первый входит во второй
                if (intervals[i][0] < intervals[j][1] && intervals[i][1] > intervals[j][1]) {
                    if (i === 0) {
                        sum += 0
                        console.log('in+', 0)
                    } else {
                         sum -= (intervals[i][1] - intervals[j][1]) - (intervals[i][0] - intervals[j][0])
                         console.log('in-', (intervals[i][1] - intervals[j][1]) - (intervals[i][0] - intervals[j][0]))
                        // sum += 0
                        // console.log('in-', 0)
                    }
                } else {
                    if (i === 0) {
                        sum += (intervals[j][1] - intervals[i][1])
                        console.log('lol+', intervals[j][1] - intervals[i][1])
                    } else {
                        sum -= intervals[i][1] - intervals[j][0]
                        console.log('lol-', intervals[i][1] - intervals[j][0])
                    }
                }
            } else if (intervals[j][0] < intervals[i][0] && intervals[j][1] > intervals[i][0]) { // второй входит в первый
                if (intervals[j][0] < intervals[i][1] && intervals[j][1] > intervals[i][1]) {
                    if (i === 0) {
                        sum += (intervals[j][1] - intervals[i][1]) - (intervals[j][0] - intervals[i][0])
                        console.log('more+', (intervals[j][1] - intervals[i][1]) - (intervals[j][0] - intervals[i][0]))
                    }else {
                        sum -= (intervals[j][1] - intervals[i][1]) - (intervals[j][0] - intervals[i][0])
                        console.log('more-', (intervals[j][1] - intervals[i][1]) - (intervals[j][0] - intervals[i][0]))
                    }
                } else {
                    if (i === 0) {
                        sum += intervals[i][0] - intervals[j][0]
                        console.log('kek+', intervals[i][0] - intervals[j][0])
                    } else {
                        sum -= intervals[j][1] - intervals[i][0]
                        console.log('kek-', intervals[j][1] - intervals[i][0])
                    }
                }
            } else if(intervals[j][0] === intervals[i][0] && intervals[j][1] === intervals[i][1])  {
                if (i === 0) {
                    sum += 0;
                    console.log('equals+')
                } else {
                    console.log('equals-')
                    sum -= intervals[i][1] - intervals[i][0]
                }
            } else {
                if (i === 0) {
                    sum += intervals[j][1] - intervals[j][0]
                    console.log('notperesec+', intervals[j][1] - intervals[j][0])
                }else{
                    sum += 0
                    console.log('notperesec-', 0)
                }
            }
        }
    }
    return sum;
}

console.log(sumIntervals( [
    [ 18, 23 ],
  [ 3, 12 ],
  [ 12, 22 ],
  [ -20, -17 ],
  [ 1, 11 ],
  [ 15, 24 ]
 ] ))