// solution 1
function solution(num_list, n) {
	let answer = [];

	for (i = n - 1; i < num_list.length; i++) {
		answer.push(num_list[i]);
	}

	return answer;
}

// solution 2
function solution(num_list, n) {
	return num_list.slice(n - 1);
}

// solution 3
const solution = (num_list, n) => num_list.slice(n - 1);

// solution 4
function solution(num_list, n) {
	return num_list.splice(n - 1, list.length);
}
