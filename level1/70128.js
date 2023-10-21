// solution1
function solution1(a, b) {
	let sum = 0;

	for (i = 0; i < a.length; i++) {
		sum += a[i] * b[i];
	}

	return sum;
}

// solution2
function solution2(a, b) {
	let sum = a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);
	return sum;
}
