function solution1(n) {
	let arr = [];

	for (let i = 0; i < n; i++) {
		arr[i] = [];
		for (let j = 0; j < n; j++) {
			arr[i][j] = i === j ? 1 : 0;
		}
	}
	return arr;
}

function solution2(n) {
	let result = [];

	for (let i = 0; i < n; i++) {
		let arr = [];
		for (let j = 0; j < n; j++) {
			if (i === j) {
				arr.push(1);
			} else {
				arr.push(0);
			}
		}
		result.push(arr);
	}
	return result;
}

// 테스트 케이스
console.log(solution2(3)); // [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
