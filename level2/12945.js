function solution(n) {
	let answer = [];

	for (let i = 0; i <= n; i++) {
		if (i == 0) {
			answer.push(0);
		}
		if (i == 1) {
			answer.push(1);
		}
		if (i >= 2) {
			sum = answer[i - 1] + answer[i - 2];
			answer.push(sum % 1234567);
		}
	}
	return answer.at(n);
}

// 테스트 케이스
console.log(solution(3)); // 2
console.log(solution(5)); // 5
