function solution(s) {
	let count = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === "(") {
			count++;
		} else if (s[i] === ")") {
			count--;
			if (count < 0) {
				return false;
			}
		}
	}

	return count === 0;
}

// 테스트 케이스
console.log(solution("()()")); // true
console.log(solution("(())()")); // true
console.log(solution(")()(")); // false
console.log(solution("(()(")); // false
