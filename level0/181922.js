function solution(arr, queries) {
	for (let i = 0; i < queries.length; i++) {
		const [s, e, k] = queries[i];

		for (let j = s; j <= e; j++) {
			if (j % k === 0) {
				arr[j] += 1;
			}
		}
	}

	return arr;
}

// 테스트 케이스
console.log(
	solution(
		[0, 1, 2, 4, 3],
		[
			[0, 4, 1],
			[0, 3, 2],
			[0, 3, 3],
		]
	)
); // [3, 2, 4, 6, 4]
