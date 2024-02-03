// solution1
function solution1(arr) {
	let answer = [];

	if (!arr.includes(2)) {
		answer.push(-1);
	} else {
		const first = arr.indexOf(2);
		const last = arr.lastIndexOf(2);

		answer = arr.slice(first, last + 1);
	}
	return answer;
}

// solution2
function solution(arr) {
	const first = arr.indexOf(2);
	const last = arr.lastIndexOf(2);

	return first === -1 ? [-1] : arr.slice(first, last + 1);
}

// 테스트 케이스
console.log(solution([1, 2, 1, 4, 5, 2, 9])); // [2, 1, 4, 5, 2]
console.log(solution([1, 2, 1])); //	[2]
console.log(solution([1, 1, 1])); //	[-1]
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1])); //	[2, 1, 2, 1, 10, 2]
