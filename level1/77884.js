// solution1
function solution1(left, right) {
	let sum = 0;

	for (i = left; i <= right; i++) {
		let divisorsCount = 0;

		for (j = 1; j <= i; j++) {
			if (i % j === 0) {
				divisorsCount++;
			}
		}

		if (divisorsCount % 2) sum -= i;
		else sum += i;
	}

	return sum;
}

// solution2
function solution2(left, right) {
	let sum = 0;

	for (let i = left; i <= right; i++) {
		if (Number.isInteger(Math.sqrt(i))) sum -= i; //제곱근이 정수면, 약수의 갯수가 홀수
		else sum += i;
	}

	return sum;
}
