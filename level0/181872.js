function solution(myString, pat) {
	let index = myString.lastIndexOf(pat);

	return myString.substring(0, index + pat.length);
}

// 테스트 케이스
console.log(solution("AbCdEFG", "dE")); // "AbCdE"
