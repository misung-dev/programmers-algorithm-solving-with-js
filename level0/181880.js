function solution(num_list) {
	let count = 0;

	for (let i = 0; i < num_list.length; i++) {
		let num = num_list[i];
		while (num > 1) {
			num = Math.floor(num / 2);
			count += 1;
		}
	}
	return count;
}

// 테스트 케이스
console.log(solution([12, 4, 15, 1, 14])); // 11
