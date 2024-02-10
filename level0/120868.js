// solution1
function solution1(sides) {
	let newSides = sides.sort((a, b) => b - a);
	return newSides[1] + newSides[1] - 1;
}

// solution2
function solution(sides) {
	return Math.min(...sides) * 2 - 1;
}

// 테스트 케이스
console.log(solution([1, 2])); //	1
console.log(solution([3, 6])); //	5
console.log(solution([11, 7])); // 13
