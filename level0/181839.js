// solution1
function solution(a, b) {
	let answer = 0;

	if (a % 2 === 1 && b % 2 === 1) {
		answer = a ** 2 + b ** 2;
	} else if (a % 2 === 1 || b % 2 === 1) {
		answer = 2 * (a + b);
	} else {
		answer = Math.abs(a - b);
	}
	return answer;
}

// solution2
function solution(a, b) {
	const isOdd = (num) => num % 2 === 1;

	return isOdd(a) && isOdd(b)
		? a ** 2 + b ** 2
		: isOdd(a) || isOdd(b)
		? 2 * (a + b)
		: Math.abs(a - b);
}

// 테스트 케이스
console.log(solution(3, 5)); // 34
