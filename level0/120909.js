// solution 1
function solution(n) {
	return Math.sqrt(n) % 1 == 0 ? 1 : 2;
}

// solution 2
function solution(n) {
	return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

// solution 3
function solution(n) {
	if (Math.sqrt(n) % 1 == 0) {
		return 1;
	} else {
		return 2;
	}
}
