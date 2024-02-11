// solution1
function solution1(my_string, queries) {
	let strArr = my_string.split("");

	for (let i = 0; i < queries.length; i++) {
		let [start, end] = queries[i];
		let reversed = strArr.slice(start, end + 1).reverse();
		strArr.splice(start, reversed.length, ...reversed);
	}

	return strArr.join("");
}

// solution2
function solution(my_string, queries) {
	let strArr = my_string.split("");
	queries.forEach(([start, end]) => {
		const changeStr = strArr.slice(start, end + 1).reverse();
		strArr.splice(start, changeStr.length, ...changeStr);
	});

	return strArr.join("");
}

// 테스트 케이스
console.log(
	solution("rermgorpsam", [
		[2, 3],
		[0, 7],
		[5, 9],
		[6, 10],
	])
); //"programmers"
