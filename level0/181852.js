// solution 1
function solution(num_list) {
	num_list.sort((a, b) => a - b);
	return num_list.slice(5);
}

// solution 2
function solution(num_list) {
	return num_list.sort((a, b) => a - b).splice(5);
}
