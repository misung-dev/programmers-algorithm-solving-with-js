// solution 1
function solution(numbers, n) {
	let sum = 0;

	for (i = 0; sum <= n; i++) {
		sum += numbers[i];
	}
	return sum;
}

// solution 2
function solution(numbers, n) {
	let answer = 0;
	let i = 0;
	while (answer <= n) {
		answer += numbers[i++];
	}
	return answer;
}

// solution 3
function solution(numbers, n) {
	return numbers.reduce((a, c, i, t) => (a <= n ? a + c : a));
}
