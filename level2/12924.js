function solution(num) {
	let count = 0;

	for (let start = 1; start <= num; start++) {
		let sum = 0;

		// 연속된 자연수 찾기 (연속된 자연수의 합이 같거나 크지 않는다면 반복문 지속)
		for (let current = start; current <= num; current++) {
			sum += current;

			if (sum === num) {
				// 연속된 자연수의 합이 num이 되면 count를 증가
				count++;
				break;
			} else if (sum > num) {
				// 연속된 자연수의 합이 num보다 크다면 반복문 중단
				break;
			}
		}
	}

	return count;
}

console.log(solution(15)); // 결과: 4
