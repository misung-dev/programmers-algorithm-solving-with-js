const factorial = (num) => (num === 0 ? 1 : num * factorial(num - 1));

function solution(balls, share) {
	return Math.round(factorial(balls) / factorial(balls - share) / factorial(share));
}

// 테스트 케이스
console.log(solution(3, 2)); // 3
console.log(solution(5, 3)); // 10
