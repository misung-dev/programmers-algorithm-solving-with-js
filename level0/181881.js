function solution(arr) {
	let count = 0;
	let currentArray = arr.slice();
	let previousArray = [];

	while (true) {
		previousArray = currentArray.slice();

		for (let i = 0; i < currentArray.length; i++) {
			if (currentArray[i] >= 50 && currentArray[i] % 2 === 0) {
				currentArray[i] = currentArray[i] / 2;
			} else if (currentArray[i] < 50 && currentArray[i] % 2 === 1) {
				currentArray[i] = currentArray[i] * 2 + 1;
			}
		}

		if (currentArray.join() === previousArray.join()) {
			return count;
		}

		count++;
	}
}

// 테스트 케이스
console.log(solution([1, 2, 3, 100, 99, 98])); // 5
