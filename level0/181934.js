// solution1
function solution1(ineq, eq, n, m) {
	if (
		(ineq === ">" && n >= m) ||
		(ineq === "<" && n <= m) ||
		(ineq === ">" && eq === "!" && n > m) ||
		(ineq === "<" && eq === "!" && n < m)
	) {
		return 1;
	} else {
		return 0;
	}
}

// solution2
function solution(ineq, eq, n, m) {
	if (eq === "=" && n === m) return 1;
	if (ineq === "<" && n < m) return 1;
	if (ineq === ">" && n > m) return 1;
	return 0;
}

// 테스트 케이스
console.log(solution("<", "=", 20, 50)); // 1
console.log(solution(">", "!", 41, 78)); // 0
