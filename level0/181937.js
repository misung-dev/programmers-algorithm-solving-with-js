// solution 1
function solution(num, n) {
	if (num % n === 0) {
		return 1;
	} else {
		return 0;
	}
}

// solution 2
function solution(num, n) {
	return num % n === 0 ? 1 : 0;
}
