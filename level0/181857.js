// solution1
function solution1(arr) {
	const nextPowerOfTwo = Math.pow(2, Math.ceil(Math.log2(arr.length)));
	const zerosToAdd = nextPowerOfTwo - arr.length;
	const answer = arr.slice();

	for (let i = 0; i < zerosToAdd; i++) {
		answer.push(0);
	}

	return answer;
}

// solution2
function solution(arr) {
	const nextPowerOfTwo = 2 ** Math.ceil(Math.log2(arr.length));
	const zerosToAdd = nextPowerOfTwo - arr.length;

	return [...arr, ...new Array(zerosToAdd).fill(0)];
}

// 테스트 케이스
console.log(solution([1, 2, 3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6, 0, 0]
console.log(solution([58, 172, 746, 89])); // [58, 172, 746, 89]
