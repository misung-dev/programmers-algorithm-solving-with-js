// solution 1
function solution(n, numlist) {
	var answer = [];

	for (var i = 0; i < numlist.length; i++) {
		if (numlist[i] % n === 0) {
			answer.push(numlist[i]);
		}
	}

	return answer;
}

// solution 2
function solution(n, numlist) {
	return numlist.filter((num) => num % n === 0);
}
