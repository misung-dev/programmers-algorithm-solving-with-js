// solution 1
function solution(a, b, flag) {
	return flag === true ? a + b : a - b;
}

// solution 2
function solution(a, b, flag) {
	return flag ? a + b : a - b;
}

// solution 3
const solution = (a, b, flag) => (flag ? a + b : a - b);
