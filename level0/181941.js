// solution1
function solution1(arr) {
	return arr.join("");
}

// solution2
function solution2(arr) {
	let answer = "";

	for (i of arr) {
		answer += i;
	}
	return answer;
}
