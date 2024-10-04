// 코드 처리하기

function solution(code) {
	let ret = "";
	let mode = true;

	for (let i = 0; i < code.length; i++) {
		if (code[i] !== "1") {
			if (mode) {
				// mode가 true (즉, 0일때)
				if (i % 2 === 0) {
					ret += code[i];
				}
			} else {
				// mode가 false (즉, 1일때)
				if (i % 2 === 1) {
					ret += code[i];
				}
			}
		} else {
			// 모드 전환
			mode = !mode;
		}
	}

	return ret === "" ? "EMPTY" : ret;
}

// 테스트 케이스
console.log(solution("abc1abc1abc")); // "acbac"
