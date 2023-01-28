// Your task is to create a new implementation of modpow so that it computes (x^y)%n for large y. The problem with the current implementation is that the output of Math.pow is so large on our inputs that it won't fit in a 64-bit float.

// You're also going to need to be efficient, because we'll be testing some pretty big numbers.

// Random tests
// 150
// 150 random tests with 
// 2
// ≤
// ≤
// 40000
// 2≤x≤40000, 
// 3000000
// ≤
// ≤
// 2000000000
// 3000000≤y≤2000000000, 
// 1000
// ≤
// ≤
// 10000000
// 1000≤n≤10000000.

function power(x, y, n)
{
    if (n === 1) {
		return 0;
	}

	x %= n;

	let result = 1;

	while (y > 0) {
		if (y % 2 === 1) {
			result = (result * x) % n;
		}

		y >>= 1;
		x = (x ** 2) % n;
	}

	return result;
}
console.log(power(5, 100000000, 19))
