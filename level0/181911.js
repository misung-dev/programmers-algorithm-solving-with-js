// solution1
function solution1(my_strings, parts) {
	let word = "";

	for (let i = 0; i < my_strings.length; i++) {
		const [start, end] = parts[i];
		word += my_strings[i].slice(start, end + 1);
	}
	return word;
}

// solution2
function solution(my_strings, parts) {
	let word = "";

	parts.forEach(([start, end], i) => {
		word += my_strings[i].substring(start, end + 1);
	});

	return word;
}

// 테스트 케이스
console.log(
	solution(
		["progressive", "hamburger", "hammer", "ahocorasick"],
		[
			[0, 4],
			[1, 2],
			[3, 5],
			[7, 7],
		]
	)
); // "programmers"
