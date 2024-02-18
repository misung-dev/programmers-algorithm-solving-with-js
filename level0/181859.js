function solution(arr) {
	let stk = [];

	for (let i = 0; i < arr.length; i++) {
		if (stk.length === 0 || stk[stk.length - 1] !== arr[i]) {
			stk.push(arr[i]);
		} else {
			stk.pop();
		}
	}

	if (stk.length === 0) {
		stk.push(-1);
	}
	return stk;
}

// 테스트 케이스
console.log(solution([0, 1, 1, 1, 0])); // [0, 1, 0]
console.log(solution([0, 1, 0, 1, 0])); // [0, 1, 0, 1, 0]
console.log(solution([0, 1, 1, 0])); // [-1]
