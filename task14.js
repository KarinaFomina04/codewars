//TODO

function addAll(numbers) {
    let totalSum = numbers[0] * (numbers.length - 1);
    for (let i = 1; i <= numbers.length - 1; i++){
      totalSum += (numbers.length - i) * numbers[i];
    }
    return totalSum
  }

addAll([1, 2, 3])