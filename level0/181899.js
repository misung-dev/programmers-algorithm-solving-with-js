// solution 1
function solution(start, end) {
	let answer = [];

	for (i = start; i >= end; i--) {
		answer.push(i);
	}
	return answer;
}
