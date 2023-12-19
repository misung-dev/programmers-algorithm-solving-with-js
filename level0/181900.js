// solution1
function solution1(my_string, indices) {
	const arrStr = [...my_string];
	const arrIndices = indices.sort(function (a, b) {
		return b - a;
	});

	for (let i = 0; i < arrIndices.length; i++) {
		let num = arrIndices[i];
		arrStr.splice(num, 1);
	}

	return arrStr.join("");
}

// solution2
function solution2(my_string, indices) {
	let word = "";

	for (let i = 0; i < my_string.length; i++) {
		if (!indices.includes(i)) {
			word += my_string[i];
		}
	}
	return word;
}

// 테스트 케이스
console.log(solution2("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3])); // "programmers"
