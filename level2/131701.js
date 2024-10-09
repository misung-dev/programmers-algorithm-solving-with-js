// 연속 부분 수열 합의 개수

function solution(elements) {
	let sumSet = new Set(); // 집합 사용
	const len = elements.length;

	// 갯수에 따라 세기 ex) 1, 2, 3 ...
	for (let i = 1; i <= len; i++) {
		// 갯수에 따라 원소 합 구하기
		for (let j = 0; j < len; j++) {
			let sum = 0;

			for (let k = 0; k < i; k++) {
				sum += elements[(j + k) % len]; // 원형 배열을 처리하기 위해 % 사용
			}
			sumSet.add(sum);
		}
	}

	return sumSet.size;
}

// 테스트 케이스
console.log(solution([7, 9, 1, 1, 4])); // 18
