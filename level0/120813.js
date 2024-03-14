function solution(n) {
	let arr = [];

	for (let i = 1; i <= n; i += 2) {
		arr.push(i);
	}
	return arr;
}

// 테스트 케이스
console.log(solution(10)); // [1, 3, 5, 7, 9]
console.log(solution(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
