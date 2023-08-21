// solution 1
function solution(n) {
	let answer = 1;

	for (i = 1; answer <= n; i++) {
		answer *= i;
	}
	return i - 2;
}

// solution 2
function solution(n) {
	let answer = 0,
		count = 1,
		i = 1;

	while (count <= n) {
		i++;
		count = count * i;
		answer++;
	}

	return answer;
}
