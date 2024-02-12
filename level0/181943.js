function solution(my_string, overwrite_string, s) {
	const start = my_string.substring(0, s);
	const end = my_string.substring(s + overwrite_string.length);
	return start + overwrite_string + end;
}

// 테스트 케이스
console.log(solution("He11oWor1d", "lloWorl", 2)); // "HelloWorld"
console.log(solution("Program29b8UYP", "merS123", 7)); //"ProgrammerS123"
