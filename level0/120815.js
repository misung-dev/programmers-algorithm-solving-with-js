function solution(n) {
	for (let pizza = 1; pizza <= 100; pizza++) {
		if ((6 * pizza) % n === 0) {
			return pizza;
		}
	}
}

// 테스트 케이스
console.log(solution(6)); // 1
console.log(solution(10)); // 5
console.log(solution(4)); // 2
