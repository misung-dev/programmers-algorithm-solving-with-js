function solution(s) {
	let answer = [-1];

	for (let i = 1; i < s.length; i++) {
		let newStr = s.slice(0, i + 1);
		let alpha = newStr[newStr.length - 1];
		let pos = newStr.lastIndexOf(alpha, newStr.length - 2);

		if (pos == -1) {
			answer.push(-1);
		} else {
			answer.push(i - pos);
		}
	}
	return answer;
}

// 테스트 케이스
console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]
