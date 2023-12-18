function solution(n) {
	let arr = [];

	for (let i = 0; i < n; i++) {
		arr[i] = [];
		for (let j = 0; j < n; j++) {
			arr[i][j] = i === j ? 1 : 0;
		}
	}
	return arr;
}

// 테스트 케이스
console.log(solution(3)); // [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
