function solution(a, b) {
	const num1 = Number("" + a + b);
	const num2 = 2 * a * b;

	return num1 > num2 ? num1 : num2;
}

// 테스트 케이스
console.log(solution(2, 91)); // 364
console.log(solution(91, 2)); // 912
