function solution(s) {
	let answer = "";
	let numList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

	let i = 0;
	while (i < s.length) {
		if (!isNaN(s[i])) {
			// 현재 문자가 숫자라면 answer에 그대로 추가
			answer += s[i];
			i++;
		} else {
			// 현재 문자가 영단어로 표현된 숫자인 경우
			for (let j = 0; j < numList.length; j++) {
				if (s.startsWith(numList[j], i)) {
					// 해당 숫자의 영단어와 일치하면 해당 숫자를 answer에 추가하고 인덱스 업데이트
					answer += j;
					i += numList[j].length;
					break;
				}
			}
		}
	}

	return parseInt(answer);
}

// 예시
console.log(solution("one4seveneight")); // 1478
console.log(solution("23four5six7")); // 234567

// isNaN()
// 매개변수가 숫자인지 검사하는 함수입니다.(NaN은 Not a Number입니다.)
// 매개변수가 숫자면 false, 숫자가 아니면 true 값을 반환합니다.

// string.startsWith()
// string이 주어진 문자열로 시작하면 true, 아니면 false를 반환합니다.
// 두번째 인자로 index를 전달하면 탐색할 위치를 지정할 수 있습니다.

// [예시1] string.startsWith( 탐색할 문자열 )
// 문자열만 전달하는 경우
// const str = "Tom is thinking";
// const name = "Tom";
// console.log(str.startsWith(name));
// [결과] str이 "Tom"으로 시작하므로 true를 반환합니다.

// [예시2] string.startsWith( 탐색할 문자열, index )
// 문자열과 index를 전달하는 경우
// const str = "Tom is thinking";
// console.log(str.startsWith("is", 4));
// [결과] 4번째 index부터 "is"로 시작하므로 true를 반환합니다.
