function solution(my_string, index_list) {
	let words = "";

	for (i = 0; i < index_list.length; i++) {
		words += my_string[index_list[i]];
	}
	return words;
}

// 예시
console.log(solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])); // "programmers"
