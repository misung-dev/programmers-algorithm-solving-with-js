// solution1
function solution1(box, n) {
	let answer = 1;

	for (let i = 0; i < box.length; i++) {
		answer *= Math.floor(box[i] / n);
	}
	return answer;
}

// solution2
function solution(box, n) {
	return box.reduce((acc, cur) => acc * Math.floor(cur / n), 1);
}

// 테스트 케이스
console.log(solution([10, 8, 6], 3)); // 12
