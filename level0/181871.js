function solution(myString, pat) {
	let count = 0;

	for (let i = 0; i < myString.length; i++) {
		if (myString.slice(i, i + pat.length) === pat) {
			count += 1;
		}
	}

	return count;
}

// 테스트 케이스
console.log(solution("banana", "ana")); // 2
console.log(solution("aaaa", "aa")); // 3
