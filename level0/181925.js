// solution1
function solution1(numLog) {
	let answer = "";

	for (let i = 0; i < numLog.length; i++) {
		calc = numLog[i + 1] - numLog[i];
		if (calc === 1) {
			answer += "w";
		} else if (calc === -1) {
			answer += "s";
		} else if (calc === 10) {
			answer += "d";
		} else if (calc === -10) {
			answer += "a";
		}
	}
	return answer;
}

// solution2
function solution(numLog) {
	const convert = {
		1: "w",
		"-1": "s",
		10: "d",
		"-10": "a",
	};

	return numLog
		.slice(1)
		.map((num, index) => {
			return convert[num - numLog[index]];
		})
		.join("");
}

// 테스트 케이스
console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1])); // "wsdawsdassw"
