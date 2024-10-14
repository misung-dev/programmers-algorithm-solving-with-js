// H-Index

// solution1
function solution1(citations) {
	let count = citations.length;
	const sortedCitations = citations.sort((a, b) => b - a);

	for (let i = 0; i < sortedCitations.length; i++) {
		if (sortedCitations[i] === i + 1 || sortedCitations.length === 1) {
			return i + 1;
		}
		if (sortedCitations[i] <= i + 1) {
			return i;
		}
	}
	return count;
}

// solution2
function solution(citations) {
	citations.sort((a, b) => b - a);

	for (let i = 0; i < citations.length; i++) {
		if (citations[i] <= i) {
			return i;
		}
	}

	return citations.length;
}

// 테스트 케이스
console.log(solution([3, 0, 6, 1, 5])); // 3
console.log(solution([5, 5, 5, 5, 5])); // 5
console.log(solution([10])); // 1
console.log(solution([25, 8, 5, 3, 3])); // 3
console.log(solution([10, 8, 5, 4, 3, 2, 1])); // 4
console.log(solution([12, 3, 9, 7, 4, 10, 5])); // 5
console.log(solution([1000, 1000, 1000, 1000])); // 4
