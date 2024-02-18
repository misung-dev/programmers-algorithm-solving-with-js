function solution(num_list) {
	let multi = 1;
	let sum = 0;

	for (i = 0; i < num_list.length; i++) {
		multi *= num_list[i];
		sum += num_list[i];
	}

	return multi < sum ** 2 ? 1 : 0;
}

// 테스트 케이스
console.log(solution([3, 4, 5, 2, 1])); // 1
console.log(solution([5, 7, 8, 3])); //0
