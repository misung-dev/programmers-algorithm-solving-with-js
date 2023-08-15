// solution 1
function solution(array) {
	var answer = [];

	answer.push(Math.max(...array));
	answer.push(array.indexOf(Math.max(...array)));

	return answer;
}

// solution 1
function solution(array) {
	let max = Math.max(...array);

	return [max, array.indexOf(max)];
}

// solution 3
function solution(array) {
	return [Math.max(...array), array.indexOf(Math.max(...array))];
}
