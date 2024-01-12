// solution1
function solution1(arr, idx) {
	for (let i = idx; i < arr.length; i++) {
		if (arr[i] === 1) {
			return i;
		}
	}
	return -1;
}

// solution2
const solution = (arr, idx) => arr.indexOf(1, idx);

// 테스트 케이스
console.log(solution([0, 0, 0, 1], 1)); // 3
