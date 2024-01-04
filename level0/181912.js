function solution(intStrs, k, s, l) {
	let answer = [];

	for (let i = 0; i < intStrs.length; i++) {
		let newNum = +intStrs[i]
			.split("")
			.slice(s, s + l)
			.join("");
		if (newNum > k) {
			answer.push(newNum);
		}
	}
	return answer;
}

// 테스트 케이스
console.log(solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)); // [56789, 99999]
