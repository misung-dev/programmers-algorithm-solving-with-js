function solution(n, slicer, num_list) {
	const [a, b, c] = slicer;

	if (n === 1) {
		return num_list.slice(0, b + 1);
	}
	if (n === 2) {
		return num_list.slice(a);
	}
	if (n === 3) {
		return num_list.slice(a, b + 1);
	}
	if (n === 4) {
		const sliced = [];
		for (let i = a; i <= b; i += c) {
			sliced.push(num_list[i]);
		}
		return sliced;
	}
}

// 테스트 케이스
console.log(solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])); // [2, 3, 4, 5, 6]
console.log(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])); // [2, 4, 6]
