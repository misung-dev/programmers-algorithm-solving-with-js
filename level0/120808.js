function solution(numer1, denom1, numer2, denom2) {
	let newNumer = numer1 * denom2 + numer2 * denom1;
	let newDenom = denom1 * denom2;

	for (let i = 1; i <= Math.min(newNumer, newDenom); i++) {
		if (newNumer % i === 0 && newDenom % i === 0) {
			gcd = i;
		}
	}
	return [newNumer / gcd, newDenom / gcd];
}
