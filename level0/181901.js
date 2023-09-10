// solution 1
function solution1(n, k) {
	let answer = [];

	for (i = 1; k * i <= n; i++) {
		answer.push(k * i);
	}

	return answer;
}

// solution 2
function solution2(n, k) {
	let answer = [];
	for (i = k; i <= n; i += k) {
		answer.push(i);
	}
	return answer;
}
