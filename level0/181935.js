function solution(num) {
	sum = 0;

	if (num % 2 !== 0) {
		for (let i = 1; i <= num; i += 2) {
			sum += i;
		}
	} else {
		for (let i = 2; i <= num; i += 2) {
			sum += Math.pow(i, 2); // i**2를 써도 결과는 동일
		}
	}
	return sum;
}

// 예시
console.log(solution(7)); // 16
console.log(solution(10)); // 220
