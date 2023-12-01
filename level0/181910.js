const solution = (my_string, n) => {
	return my_string.slice(-n);
};

// 예시
console.log(solution("ProgrammerS123", 11)); // "grammerS123"

// arr.slice(-n) : 뒤에서부터 n번째 글자 추출
