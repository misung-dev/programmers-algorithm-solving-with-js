function solution(strArr) {
	let lengthMap = {};

	for (let str of strArr) {
		const len = str.length;
		if (lengthMap[len]) {
			lengthMap[len]++;
		} else {
			lengthMap[len] = 1;
		}
	}

	let maxGroupSize = 0;
	for (let len in lengthMap) {
		if (lengthMap[len] > maxGroupSize) {
			maxGroupSize = lengthMap[len];
		}
	}
	return maxGroupSize;
}

// 테스트 케이스
console.log(solution(["a", "bc", "d", "efg", "hi"])); //2
