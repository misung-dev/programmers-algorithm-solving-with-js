function solution(arr) {
	let stk = [];

	for (let i = 0; i < arr.length; i++) {
		while (stk.length > 0 && arr[i] <= stk.slice(-1)[0]) {
			stk.pop();
		}
		stk.push(arr[i]);
	}

	return stk;
}

// 테스트 케이스
console.log(solution([1, 4, 2, 5, 3])); // [1, 2, 3]
