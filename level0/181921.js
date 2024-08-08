function solution(l, r) {
	let answer = [];

	for (let i = l; i <= r; i++) {
		let newStr = i.toString();

		if (/^[50]+$/.test(newStr)) {
			answer.push(i);
		}
	}

	if (answer.length === 0) {
		answer = [-1];
	}
	return answer;
}

// 테스트 케이스
console.log(solution(5, 555)); // [5, 50, 55, 500, 505, 550, 555]
console.log(solution(10, 20)); // [-1]
