// solution1
function solution1(arr, queries) {
	for (let i = 0; i < queries.length; i++) {
		[arr[queries[i][0]], arr[queries[i][1]]] = [arr[queries[i][1]], arr[queries[i][0]]];
	}
	return arr;
}

// solution2
function solution2(arr, queries) {
	queries.forEach(([a, b]) => {
		[arr[a], arr[b]] = [arr[b], arr[a]];
	});
	return arr;
}

// solution3
function solution(arr, queries) {
	for (let [a, b] of queries) {
		[arr[a], arr[b]] = [arr[b], arr[a]];
	}
	return arr;
}

// 테스트 케이스
console.log(
	solution(
		[0, 1, 2, 3, 4],
		[
			[0, 3],
			[1, 2],
			[1, 4],
		]
	)
); // [3, 4, 1, 0, 2]
