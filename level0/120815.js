function solution(n) {
	for (var p = 1; p <= 100; p++) {
		if ((6 * p) % n === 0) {
			return p;
		}
	}
}
