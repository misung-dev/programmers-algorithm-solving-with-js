function solution(x1, x2, x3, x4) {
	let result = (x1 || x2) && (x3 || x4);
	return result;
}

// 테스트 케이스
console.log(solution(false, true, true, true, true));
