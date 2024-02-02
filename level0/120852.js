function solution(n) {
	let answer = [];
	let divisor = 2;

	while (n != 1) {
		if (n % divisor === 0) {
			if (!answer.includes(divisor)) {
				answer.push(divisor);
			}
			n /= divisor;
		} else {
			divisor++;
		}
	}
	return answer;
}

// 테스트 케이스
console.log(solution(12)); // [2, 3]
console.log(solution(17)); // [17]
console.log(solution(420)); // [2, 3, 5, 7]
