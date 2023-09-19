// solution1
function solution1(num_list) {
	const answer = num_list.sort();
	answer.sort((a, b) => a - b);
	return answer.slice(0, 5);
}

// solution2
function solution2(num_list) {
	return num_list.sort((a, b) => a - b).slice(0, 5);
}
