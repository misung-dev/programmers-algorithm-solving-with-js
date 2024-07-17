// solution 1
function solution1(s) {
	let zeroCount = 0;
	let count = 0;

	while (s !== "1") {
		// 문자열에서 0의 개수를 셈
		let zeros = s.match(/0/g);
		if (zeros !== null) {
			zeroCount += zeros.length;
		}

		// 0을 모두 제거한 문자열의 길이를 구하여 2진수로 변환
		s = s.replace(/0/g, "").length.toString(2);
		count++;
	}
	return [count, zeroCount];
}

// solution 2
function solution(s) {
	let answer = [0, 0];

	while (s.length > 1) {
		answer[0]++;
		answer[1] += (s.match(/0/g) || []).length;
		s = s.replace(/0/g, "").length.toString(2);
	}
	return answer;
}

// 테스트 케이스
console.log(solution("110010101001")); // [(3, 8)]
console.log(solution("01110")); // [3, 3]
console.log(solution("1111111")); // [4, 1]
