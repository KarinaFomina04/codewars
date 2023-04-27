//Max sum between two negatives
//You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements.
// No negative element should be present in the sum. If there is no such sum: -1  JavaScript.
//Sum between -1 and -2 is 6, between -2 and -7 is 3 + 5 = 8. It's also not 14 (between -1 and -7), because this includes
// a negative number (-2).
function maxSumBetweenTwoNegatives(a) {
    const negatives = [...a.keys()].filter((i) => a[i] < 0);
    if (negatives.length < 2) return -1;
    let maxSum = -1;
    for (let i = 0; i < negatives.length - 1; i++) {
        const start = negatives[i] + 1;
        const end = negatives[i + 1];
        const sum = a.slice(start, end).reduce((acc, num) => acc + (num > 0 ? num : 0), 0);
        if (sum > maxSum) maxSum = sum;
    }
    return maxSum;
}

maxSumBetweenTwoNegatives([-1,6,-2,3,5,-7]) //8
maxSumBetweenTwoNegatives([5,-1,-2]) // 0
maxSumBetweenTwoNegatives([1,-2])// -1
