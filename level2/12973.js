function solution(str) {
	let newStr = str.split("");

	// 한번에 두개씩 검사하므로 newStr.length - 1
	// (제거하고 난 후 남은 숫자가 1개일때, 2개의 숫자를 비교하는 상황 방지)
	for (let i = 0; i < newStr.length - 1; i++) {
		if (newStr[i] === newStr[i + 1]) {
			newStr.splice(i, 2);

			// 두 문자를 제거한 후, 현재 인덱스 i를 그 전의 위치로 돌리기
			i = Math.max(i - 2, -1);
		}
	}

	// 배열 내 남은 문자열 길이 확인
	return newStr.length === 0 ? 1 : 0;
}

// 예시
console.log(solution("baabaa")); // 1
