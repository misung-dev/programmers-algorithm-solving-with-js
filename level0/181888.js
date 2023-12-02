function solution(num_list, num) {
	let answer = [];

	for (let i = 0; i < num_list.length; i += num) {
		answer.push(num_list[i]);
	}
	return answer;
}

// 예시
console.log(solution([4, 2, 6, 1, 7, 6], 2)); // [4, 6, 7]
