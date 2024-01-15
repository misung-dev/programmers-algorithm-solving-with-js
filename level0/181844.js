function solution(arr, delete_list) {
	return arr.filter((element) => !delete_list.includes(element));
}

// 테스트 케이스
console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12])); // [293, 395, 678]
