function solution(n) {
	let answer = [n];

	while (n !== 1) {
		if (n % 2 === 0) {
			n = n / 2;
		} else {
			n = 3 * n + 1;
		}
		answer.push(n);
	}

	return answer;
}

// 테스트 케이스
console.log(solution(10)); // [10, 5, 16, 8, 4, 2, 1]
