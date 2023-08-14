// solution 1
function solution(n, t) {
	var total = n;

	for (var i = 1; i <= t; i++) {
		total = total * 2;
	}
	return total;
}

// solution 2
function solution(n, t) {
	return n * Math.pow(2, t);
}

// 자바스크립트 pow (특정숫자의 거듭제곱 값을 계산해주는 함수)
// Math.pow([대상 숫자], [거듭제곱 횟수]);

// 자바스크립트 sqrt (특정숫자의 제곱근 값을 계산해주는 함수)
// Math.sqrt([대상 숫자]);
