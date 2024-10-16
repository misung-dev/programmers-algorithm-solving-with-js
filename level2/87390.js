// n^2 배열 자르기

function solution(n, left, right) {
	let arr = [];

	for (let i = left; i <= right; i++) {
		let row = Math.floor(i / n);
		let col = i % n;

		arr.push(Math.max(row, col) + 1);
	}

	return arr;
}

// 테스트 케이스
console.log(solution(3, 2, 5)); // [3,2,2,3]
console.log(solution(4, 7, 14)); // [4,3,3,3,4,4,4,4]
