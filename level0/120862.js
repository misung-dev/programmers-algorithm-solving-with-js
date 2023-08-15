// solution 1
function solution(numbers) {
	numbers.sort((a, b) => b - a);
	a = numbers[0] * numbers[1];
	b = numbers[numbers.length - 1] * numbers[numbers.length - 2];

	if (a < b) {
		return b;
	} else {
		return a;
	}
}

// solution 2
function solution(numbers) {
	numbers.sort((a, b) => a - b);
	return Math.max(
		numbers[0] * numbers[1],
		numbers[numbers.length - 1] * numbers[numbers.length - 2]
	);
}
