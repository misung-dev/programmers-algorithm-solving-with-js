// solution 1
function solution1(brown, yellow) {
	let answer = [];
	const total = brown + yellow;

	for (let i = 3; i < Math.floor(total / 2); i++) {
		let num1 = Math.floor(total / i);
		let num2 = total / num1;

		let width = (num1 + (num2 - 2)) * 2;
		if (brown === width && num1 >= num2) {
			answer.push(num1, num2);
		}
	}
	return answer;
}

// solution 2
function solution(brown, yellow) {
	let answer = [];

	for (num2 = 3; num2 <= (brown + yellow) / num2; num2++) {
		num1 = Math.floor((brown + yellow) / num2);

		if ((num1 - 2) * (num2 - 2) === yellow) {
			answer = [num1, num2];
			break;
		}
	}
	return answer;
}

// 테스트 케이스
console.log(solution(10, 2)); // [4, 3]
console.log(solution(8, 1)); // [3, 3]
console.log(solution(24, 24)); // [8, 6]
