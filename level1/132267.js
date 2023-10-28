function solution(a, b, n) {
	let totalBottleCount = 0;

	while (n >= a) {
		const newBottleCount = Math.floor(n / a) * b;

		totalBottleCount += newBottleCount;
		n = newBottleCount + (n % a);
	}

	return totalBottleCount;
}
