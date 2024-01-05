function solution(arr, flag) {
	let answer = [];

	for (let i = 0; i < arr.length; i++) {
		if (flag[i] === true) {
			answer = answer.concat(Array(arr[i] * 2).fill(arr[i]));
		} else {
			answer = answer.slice(0, answer.length - arr[i]);
		}
	}

	return answer;
}

// 테스트 케이스
console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false])); // [3, 3, 3, 3, 4, 4, 4, 4]
