// 다음에 올 숫자

function solution(common) {
	let answer = 0;
	let lastNum = common[common.length - 1];

	if (common[2] - common[1] === common[1] - common[0]) {
		answer = lastNum + (common[1] - common[0]);
	} else if (common[2] / common[1] === common[1] / common[0]) {
		answer = lastNum * (common[1] / common[0]);
	}

	return answer;
}

// 테스트 케이스
console.log(solution([1, 2, 3, 4])); // 5
console.log(solution([2, 4, 8])); // 16
