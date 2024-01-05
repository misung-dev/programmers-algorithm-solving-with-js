function solution(q, r, code) {
	let answer = "";

	for (let i = r; i < code.length; i = i + q) {
		answer += code[i];
	}
	return answer;
}

// 테스트 케이스
console.log(solution(3, 1, "qjnwezgrpirldywt")); //"jerry"
