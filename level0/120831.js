function solution(n) {
	let even = 0;

	for (let num = 1; num <= n; num++) {
		if (num % 2 === 0) {
			even = even + num;
		}
	}

	return even;
}
