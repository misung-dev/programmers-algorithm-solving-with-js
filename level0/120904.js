// solution 1
function solution(num, k) {
	let newNum = [...String(num)];

	for (i = 0; i < newNum.length; i++) {
		if (newNum[i] === String(k)) {
			return i + 1;
		}
	}
	return -1;
}

// solution 2
function solution(num, k) {
	let answer = num.toString();
	if (answer.includes(k)) {
		return answer.indexOf(k) + 1;
	} else {
		return -1;
	}
}

// indexOf 함수의 개념
// 문자열.indexOf(특정문자열)
// indexOf 함수는, 문자열에서 특정문자열을 찾고,
// 검색된 문자열이 '첫번째'로 나타나는 위치를 리턴합니다.
