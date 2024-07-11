function solution(arr, queries) {
	n_len = queries.length;
	result = [];

	for (let i = 0; i < n_len; i++) {
		let [a, b, c] = queries[i];

		let newArr = [];
		for (let j = a; j <= b; j++) {
			if (arr[j] > c) {
				newArr.push(arr[j]);
			}
		}
		if (newArr.length > 0) {
			result.push(Math.min(...newArr));
		} else {
			result.push(-1);
		}
	}

	return result;
}

// 테스트 케이스
console.log(
	solution(
		[0, 1, 2, 4, 3],
		[
			[0, 4, 2],
			[0, 3, 2],
			[0, 2, 2],
		]
	)
); // [3, 4, -1]
