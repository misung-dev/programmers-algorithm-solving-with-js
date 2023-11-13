function solution(s) {
	let words = s.split(" "); // 단어로 분리

	let answer = words
		.map(function (word) {
			return word
				.split("")
				.map(function (char, index) {
					if (index % 2 === 0) {
						return char.toUpperCase(); // 짝수번째 알파벳은 대문자로
					} else {
						return char.toLowerCase(); // 홀수번째 알파벳은 소문자로
					}
				})
				.join(""); // 각 단어를 다시 합치기
		})
		.join(" "); // 단어 사이에 공백 추가하여 문장으로 합치기

	return answer;
}

console.log(solution("try hello world"));
