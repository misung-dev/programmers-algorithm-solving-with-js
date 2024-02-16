function solution(score) {
	return score.map((s, idx) => {
		let avg = (s[0] + s[1]) / 2;
		return score.filter((sc) => (sc[0] + sc[1]) / 2 > avg).length + 1;
	});
}

// 테스트 케이스
console.log(
	solution([
		[80, 70],
		[90, 50],
		[40, 70],
		[50, 80],
	])
); // [1, 2, 4, 3]
console.log(
	solution([
		[80, 70],
		[70, 80],
		[30, 50],
		[90, 100],
		[100, 90],
		[100, 100],
		[10, 30],
	])
); // [4, 4, 6, 2, 2, 1, 7]
