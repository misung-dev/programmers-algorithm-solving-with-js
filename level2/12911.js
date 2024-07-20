function solution(n) {
	let count = binCount(n);
	while (1) {
		if (binCount(++n) === count) {
			return n;
		}
	}
	return answer;
}

function binCount(num) {
	bin = num.toString(2);
	countOne = bin.match(/1/gi).length;
	return countOne;
}

// 테스트 케이스
console.log(solution(78)); // 83
console.log(solution(15)); // 23
