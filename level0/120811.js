// solution 1
function solution1(array) {
	let answer = array.sort((a, b) => a - b);
	return answer[Math.floor(answer.length / 2)];
}

// solution 2
function solution2(array) {
	const newArray = array.sort((a, b) => a - b);
	const mid_num = Math.floor(newArray.length / 2);

	return newArray[mid_num];
}

// solution 3
const solution = (array) => array.sort((a, b) => a - b).at(Math.floor(array.length / 2));

// 테스트 케이스
console.log(solution([1, 2, 7, 10, 11])); //	7
console.log(solution([9, -1, 0])); //	0
