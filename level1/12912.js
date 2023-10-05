// solution1
function solution1(a, b) {
	let sum = 0;
	if (a <= b) {
		for (i = a; i <= b; i++) sum += i;
	} else {
		for (i = b; i <= a; i++) sum += i;
	}
	return sum;
}

// solution2
function solution2(a, b) {
	let sum = 0;
	const max = Math.max(a, b);
	const min = Math.min(a, b);

	for (i = min; i <= max; i++) sum += i;
	return sum;
}

// solution3
function solution3(a, b, sum = 0) {
	for (i = Math.min(a, b); i <= Math.max(a, b); i++) sum += i;
	return sum;
}
