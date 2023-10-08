// solution1
function solution1(numbers) {
	numbers.sort((a, b) => a - b);
	let sum = 0;

	for (let i = 0; i <= 9; i++) {
		if (numbers.indexOf(i) === -1) {
			sum += i;
		}
	}

	return sum;
}

// solution2
function solution2(numbers) {
	return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

// solution3
function solution3(numbers) {
	let sum = 0;

	for (i = 0; i <= 9; i++) {
		if (!numbers.includes(i)) sum += i;
	}
	return sum;
}
