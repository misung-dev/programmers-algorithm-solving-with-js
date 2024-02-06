function solution(emergency) {
	let sorted = emergency.slice().sort((a, b) => b - a);
	let result = emergency.map((num) => sorted.indexOf(num) + 1);
	return result;
}

// 테스트 케이스
console.log(solution([3, 76, 24])); // [3, 1, 2]
