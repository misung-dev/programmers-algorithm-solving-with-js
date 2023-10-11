// solution1
function solution(arr) {
	if (arr.length <= 1) {
		return [-1];
	} else {
		const min = Math.min(...arr); // 가장 작은 수를 찾음
		const index = arr.indexOf(min); // 가장 작은 수의 인덱스를 찾음
		arr.splice(index, 1); // 가장 작은 수를 제거
		return arr;
	}
}

// solution2
function solution(arr) {
	const min = Math.min(...arr);
	return arr.length != 1 ? arr.filter((i) => i != min) : [-1];
}
