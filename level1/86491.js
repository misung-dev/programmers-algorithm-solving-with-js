// solution 1
function solution1(sizes) {
	let result = 0;
	let list_a = [];
	let list_b = [];

	for (let i = 0; i < sizes.length; i++) {
		if (sizes[i][0] > sizes[i][1]) {
			list_a.push(sizes[i][0]);
			list_b.push(sizes[i][1]);
		} else {
			list_b.push(sizes[i][0]);
			list_a.push(sizes[i][1]);
		}
	}
	result = Math.max(...list_a) * Math.max(...list_b);
	return result;
}

// solution 2
function solution(sizes) {
	let maxA = 0;
	let maxB = 0;

	sizes.forEach(([a, b]) => {
		if (a > b) {
			maxA = Math.max(maxA, a);
			maxB = Math.max(maxB, b);
		} else {
			maxA = Math.max(maxA, b);
			maxB = Math.max(maxB, a);
		}
	});

	return maxA * maxB;
}

// 테스트 케이스
console.log(
	solution([
		[60, 50],
		[30, 70],
		[60, 30],
		[80, 40],
	])
); // 4000
console.log(
	solution([
		[10, 7],
		[12, 3],
		[8, 15],
		[14, 7],
		[5, 15],
	])
); // 120
console.log(
	solution([
		[14, 4],
		[19, 6],
		[6, 16],
		[18, 7],
		[7, 11],
	])
); // 133
