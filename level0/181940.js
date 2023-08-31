// solution 1
function solution(my_string, k) {
	let answer = "";

	for (i = 0; i < k; i++) {
		answer += my_string;
	}
	return answer;
}

// solution 2
function solution(my_string, k) {
	return my_string.repeat(k);
}
