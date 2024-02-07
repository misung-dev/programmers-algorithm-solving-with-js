// solution1
function solution1(num_list, n) {
	let answer = [];

	for (let i = 0; i < num_list.length; i += n) {
		answer.push(num_list.slice(i, i + n)); // slice()
	}
	return answer;
}

// solution2
function solution(num_list, n) {
	let answer = [];

	while (num_list.length) {
		answer.push(num_list.splice(0, n)); // splice()는 배열로 부터 특정 범위를 삭제하거나 새로운 값을 추가 또는 기존 값을 대체
	}
	return answer;
}

// 테스트 케이스
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3)); // [[100, 95, 2], [4, 5, 6], [18, 33, 948]]
