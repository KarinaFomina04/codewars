//Find Nearest square number

// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.
// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11,
// than 100, the square of 10.
// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

function nearestSq(n) {
	if (Math.sqrt(n) % 1 === 0) {
		return n;
	}
	let i = 1;
	while ((i + 1) * (i + 1) < n) {
		i++;
	}
	let lower = i * i;
	let upper = (i + 1) * (i + 1);
	if (n - lower <= upper - n) {
		return lower;
	} else {
		return upper;
	}
}

console.log(nearestSq(1), 1);
console.log(nearestSq(2), 1);
console.log(nearestSq(10), 9);
console.log(nearestSq(111), 121);
console.log(nearestSq(9999), 10000);