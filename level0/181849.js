// solution 1
function solution(num_str) {
	let answer = 0;

	for (i = 0; i < num_str.length; i++) {
		answer += parseInt(num_str[i]);
	}
	return answer;
}

// solution 2
function solution(num_str) {
	return [...num_str].reduce((a, c) => a + +c, 0);
}

// solution 3
function solution(num_str) {
	let answer = 0;

	num_str.split("").map((a) => (answer += Number(a)));

	return answer;
}
