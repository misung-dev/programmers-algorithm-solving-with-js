function solution(rank, attendance) {
	let sum = 0;
	let selected = [];

	for (let i = 1; i < rank.length + 1; i++) {
		let loc = rank.indexOf(i);

		if (attendance[loc]) {
			selected.push(loc);
			if (selected.length === 3) {
				break;
			}
		}
	}

	if (selected.length === 3) {
		let [a, b, c] = selected;
		sum = a * 10000 + b * 100 + c;
	}

	return sum;
}

// 테스트 케이스
console.log(solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])); // 20403
console.log(solution([1, 2, 3], [true, true, true])); // 102
console.log(solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true])); // 50200
