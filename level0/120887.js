// solution 1
function solution(i, j, k) {
	var answer = 0;

	for (num = i; num <= j; num++) {
		let numStr = num.toString();
		for (let digit of numStr) {
			if (parseInt(digit) === k) {
				answer++;
			}
		}
	}
	return answer;
}

// solution 2
function solution(i, j, k) {
	let a = "";
	for (i; i <= j; i++) {
		a += i;
	}
	return a.split(k).length - 1;
}
