// solution1
function solution1(num_list, n) {
	let newArr = [];

	newArr = num_list.slice(n);
	newArr = newArr.concat(num_list.slice(0, n));

	return newArr;
}

// solution2
function solution(num_list, n) {
	num_list.unshift(...num_list.splice(n));
	return num_list;
}

// 테스트 케이스
console.log(solution([2, 1, 6], 1)); // [1, 6, 2]
