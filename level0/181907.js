// solution 1
function solution(my_string, n) {
	let answer = "";

	for (let i = 0; i < n; i++) {
		answer += my_string[i];
	}
	return answer;
}

// solution 2
function solution(my_string, n) {
	return my_string.slice(0, n);
}
