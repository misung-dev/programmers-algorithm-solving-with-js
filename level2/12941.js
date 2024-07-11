// solution 1
function solution1(A, B) {
	let sum = 0;

	A.sort((a, b) => {
		return a - b;
	});

	B.sort((a, b) => {
		return b - a;
	});

	for (let i = 0; i < A.length; i++) {
		sum += A[i] * B[i];
	}

	return sum;
}

// solution 2
function solution(A, B) {
	A.sort((a, b) => a - b);
	B.sort((a, b) => b - a);
	return A.reduce((total, val, idx) => total + val * B[idx], 0);
}

// 테스트 케이스
console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10
