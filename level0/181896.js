// solution 1
function solution(num_list) {
	for (i = 0; i < num_list.length; i++) {
		if (num_list[i] < 0) {
			return i;
		}
	}
	return -1;
}

// solution 2
function solution(num_list) {
	let answer = num_list.findIndex((v) => v < 0);
	return answer;
}

// solution 3
const solution = (num_list) => num_list.findIndex((v) => v < 0);
