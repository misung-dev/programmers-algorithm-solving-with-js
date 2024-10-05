// 점프와 순간 이동

function solution(n) {
	let total = 0;

	while (n > 0) {
		total += n % 2;
		n = Math.floor(n / 2);
	}

	return total;
}

// 테스트 케이스
console.log(solution(5)); // 2
console.log(solution(6)); // 2
console.log(solution(5000)); // 5
