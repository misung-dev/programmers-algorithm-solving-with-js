function solution(my_string, m, c) {
	let word = "";

	for (let i = c - 1; i < my_string.length; i += m) {
		word += my_string[i];
	}
	return word;
}

// 예시
console.log(solution("ihrhbakrfpndopljhygc", 4, 2));
console.log(solution("programmers", 1, 1));
