function solution(arr, k) {
	let uniqueValues = [];

	for (let i = 0; i < arr.length; i++) {
		if (!uniqueValues.includes(arr[i])) {
			uniqueValues.push(arr[i]);
		}
	}

	let result = uniqueValues.slice(0, k);
	while (result.length < k) {
		result.push(-1);
	}

	return result;
}

// 테스트 케이스
console.log(solution([0, 1, 1, 2, 2, 3], 3)); // [0, 1, 2]
console.log(solution([0, 1, 1, 1, 1], 4)); // [0, 1, -1, -1]
