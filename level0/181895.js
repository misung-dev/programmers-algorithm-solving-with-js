// solution1
function solution1(arr, intervals) {
	let result = [];

	for (let i = 0; i < intervals.length; i++) {
		let num1 = intervals[i][0];
		let num2 = intervals[i][1];

		result = result.concat(arr.slice(num1, num2 + 1));
	}
	return result;
}

// solution2
function solution2(arr, intervals) {
	const [[a, b], [c, d]] = intervals;

	return [...arr.slice(a, b + 1), ...arr.slice(c, d + 1)];
	// ...arr은 전개 연산자로서 배열을 풀어서 각 요소를 개별적인 값으로 전개한다.
	// 즉 배열의 각 요소가 개별적인 인수로 반환된다.
}

// 테스트 케이스
console.log(
	solution2(
		[1, 2, 3, 4, 5],
		[
			[1, 3],
			[0, 4],
		]
	)
); // [2, 3, 4, 1, 2, 3, 4, 5]

//
