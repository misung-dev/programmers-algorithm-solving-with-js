function solution(n, m) {
	let result = [];

	// 최대공약수 계산
	gcd = 1;
	for (i = 1; i <= Math.min(n, m); i++) {
		if (n % i === 0 && m % i === 0) {
			gcd = i;
		}
	}
	result.push(gcd);

	// 최소공배수 계산
	let lcm = (n * m) / gcd;
	result.push(lcm);

	return result;
}

console.log(solution(3, 12));
