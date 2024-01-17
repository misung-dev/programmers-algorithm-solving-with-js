// solution1
function solution1(a, d, included) {
	let sum = 0;

	for (let i = 0; i < included.length; i++) {
		if (included[i] === true) {
			sum += a + d * i;
		}
	}
	return sum;
}

// solution2
function solution(a, d, included) {
	return included.reduce((acc, cur, i) => {
		return cur ? acc + a + d * i : acc;
	}, 0);
}

// 테스트 케이스
console.log(solution(3, 4, [true, false, false, true, true])); // 37
