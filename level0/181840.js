// solution 1
function solution(num_list, n) {
	for (let i = 0; i < num_list.length; i++) {
		if (num_list[i] === n) {
			return 1;
		}
	}
	return 0;
}

// solution 2
function solution(num_list, n) {
	let answer = 0;

	for (let i of num_list) {
		if (i == n) {
			return 1;
		}
	}
	return 0;
}

// solution 3
const solution = (num_list, n) => (num_list.include(n) ? 1 : 0);
