function solution(before, after) {
	const beforeArray = before.split("").sort().join("");
	const afterArray = after.split("").sort().join("");

	return beforeArray === afterArray ? 1 : 0;
}

// 테스트
console.log(solution("hello", "olleh")); // 1
console.log(solution("allpe", "apple")); // 0
