// 영어 끝말잇기

function solution(n, words) {
	let answer = [0, 0];
	let newWords = [words[0]];

	for (let i = 1; i < words.length; i++) {
		let a = (i % n) + 1; // 사람 번호
		let b = Math.floor(i / n) + 1; // 라운드 번호

		// 단어 중복되면 종료
		if (newWords.includes(words[i])) {
			answer = [a, b];
			break;
		}

		// 단어의 끝과 시작이 이어지지 않으면 종료
		if (words[i][0] !== words[i - 1].slice(-1)) {
			answer = [a, b];
			break;
		}

		newWords.push(words[i]);
	}

	return answer;
}

// 테스트 케이스
console.log(
	solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])
); // [3,3]
console.log(
	solution(5, [
		"hello",
		"observe",
		"effect",
		"take",
		"either",
		"recognize",
		"encourage",
		"ensure",
		"establish",
		"hang",
		"gather",
		"refer",
		"reference",
		"estimate",
		"executive",
	])
); // [0,0]
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])); // [1,3]
