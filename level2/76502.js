// 괄호 회전하기

function isValid(s) {
	const stack = [];

	for (char of s) {
		if (char === "[" || char === "{" || char == "(") {
			stack.push(char);
		} else {
			if (stack.length === 0) {
				return false;
			}
			const last = stack.pop();
			if (
				(char === "]" && last !== "[") ||
				(char === "}" && last !== "{") ||
				(char === ")" && last !== "(")
			) {
				return false;
			}
		}
	}

	return stack.length === 0;
}

function solution(s) {
	let answer = 0;
	const len = s.length;

	for (let i = 0; i < len; i++) {
		const rotated = s.slice(i) + s.slice(0, i);

		if (isValid(rotated)) {
			answer++;
		}
	}

	return answer;
}

// 테스트 케이스
console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0
