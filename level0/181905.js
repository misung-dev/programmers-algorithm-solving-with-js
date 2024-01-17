// solution1
function solution1(my_string, s, e) {
	let word = my_string.slice(0, s);

	for (let i = e; i >= s; i -= 1) {
		word += my_string[i];
	}
	word += my_string.slice(e + 1);

	return word;
}

// solution2
function solution(my_string, s, e) {
	let word = my_string
		.slice(s, e + 1)
		.split("")
		.reverse()
		.join("");

	return my_string.slice(0, s) + word + my_string.slice(e + 1);
}

// 테스트 케이스
console.log(solution("Progra21Sremm3", 6, 12)); // "ProgrammerS123"
