function solution(a, b) {
	let answer = 2;

	for (let i = a; i >= 1; i--) {
		if (a % i === 0 && b % i === 0) {
			b = b / i;
			break;
		}
	}

	while (b % 2 === 0) {
		b /= 2;
	}

	while (b % 5 === 0) {
		b /= 5;
	}

	if (b === 1) {
		answer = 1;
	}

	return answer;
}

// 테스트 케이스
console.log(solution(7, 20)); // 1
console.log(solution(11, 22)); // 1
console.log(solution(12, 21)); // 2
