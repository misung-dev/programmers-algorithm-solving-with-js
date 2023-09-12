// solution 1
function solution1(a, b) {
	const num1 = +(String(a) + String(b));
	const num2 = +(String(b) + String(a));

	return num1 >= num2 ? num1 : num2;
}

// solution 2
function solution2(a, b) {
	return Math.max(+(a.toString() + b.toString()), +(b.toString() + a.toString()));
}
