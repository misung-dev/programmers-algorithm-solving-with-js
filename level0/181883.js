function solution(arr, queries) {
	for (let [s, e] of queries) {
		for (let i = s; i <= e; i++) {
			arr[i] += 1;
		}
	}
	return arr;
}

// 테스트 케이스
console.log(
	solution(
		[0, 1, 2, 3, 4],
		[
			[0, 1],
			[1, 2],
			[2, 3],
		]
	)
); // [1, 3, 4, 4, 4]
