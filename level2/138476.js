// 귤 고르기

function solution(k, tangerine) {
	let result = 0;
	let dict = {};

	// 딕셔너리로 분류
	for (let i = 0; i < tangerine.length; i++) {
		if (tangerine[i] in dict) {
			dict[tangerine[i]] += 1;
		} else {
			dict[tangerine[i]] = 1;
		}
	}

	// 값을 내림차순 정렬
	const sortedValues = Object.values(dict).sort((a, b) => b - a);

	// 리스트의 값들을 순회하며, 계산
	for (let value of sortedValues) {
		k -= value;
		result++;

		if (k <= 0) {
			break;
		}
	}

	return result;
}

// 테스트 케이스
console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); // 2
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); // 1
