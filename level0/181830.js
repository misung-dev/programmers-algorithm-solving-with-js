function solution(arr) {
	const rowLength = arr.length;
	const colLength = arr[0].length;

	if (rowLength < colLength) {
		for (let i = 0; i < colLength - rowLength; i++) {
			arr.push(Array(colLength).fill(0));
		}
	} else if (rowLength > colLength) {
		for (let i = 0; i < rowLength; i++) {
			for (let j = 0; j < rowLength - colLength; j++) {
				arr[i].push(0);
			}
		}
	}
	return arr;
}

// 테스트 케이스
console.log(
	solution([
		[572, 22, 37],
		[287, 726, 384],
		[85, 137, 292],
		[487, 13, 876],
	])
); // [[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]]
console.log(
	solution([
		[57, 192, 534, 2],
		[9, 345, 192, 999],
	])
); //  345, 192, 999]]	[[57, 192, 534, 2], [9, 345, 192, 999], [0, 0, 0, 0], [0, 0, 0, 0]]
console.log(
	solution([
		[1, 2],
		[3, 4],
	])
); // [[1, 2], [3, 4]]
