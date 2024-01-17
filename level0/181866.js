function solution(myString) {
	return (str = myString
		.split("x")
		.filter((str) => str !== "")
		.sort());
}

// 테스트 케이스
console.log(solution("axbxcxdx")); // ["a","b","c","d"]
console.log(solution("dxccxbbbxaaaa")); // ["aaaa","bbb","cc","d"]
