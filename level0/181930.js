// solution1
function solution(a, b, c) {
	answer = 0;

	if (a !== b && a !== c && b !== c) {
		answer = a + b + c;
	} else if (a === b && a !== c) {
		answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
	} else if (a === c && a !== b) {
		answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
	} else if (b === c && b !== a) {
		answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
	} else if (a === b && b === c) {
		answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
	}
	return answer;
}

// solution2
function solution(a, b, c) {
	let answer = a + b + c;

	if (a === b || a === c || b === c) {
		answer *= a ** 2 + b ** 2 + c ** 2;
	}
	if (a === b && a === c) {
		answer *= a ** 3 + b ** 3 + c ** 3;
	}
	return answer;
}

// solution3
function solution(a, b, c) {
	let sum1 = a + b + c;
	let sum2 = a * a + b * b + c * c;
	let sum3 = a ** 3 + b ** 3 + c ** 3;

	if (a === b && b === c) {
		return sum1 * sum2 * sum3;
	} else if (a === b || a === c || b === c) {
		return sum1 * sum2;
	} else {
		return sum1;
	}
}
