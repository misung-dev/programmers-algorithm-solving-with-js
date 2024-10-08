// 예상 대진표

function solution(n, a, b) {
	let round = 0;

	while (a !== b) {
		if (a % 2 === 0) {
			a = a / 2;
		} else {
			a = (a + 1) / 2;
		}

		if (b % 2 === 0) {
			b = b / 2;
		} else {
			b = (b + 1) / 2;
		}

		round++;
	}

	return round;
}

// 테스트 케이스
console.log(solution(8, 4, 7)); // 3
console.log(solution(16, 2, 7)); // 3
