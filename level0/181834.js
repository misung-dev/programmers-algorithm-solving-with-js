function solution(myString) {
	let answer = "";

	for (let i = 0; i < myString.length; i++) {
		let charCode = myString.charCodeAt(i);

		if (charCode < 108) {
			answer += "l";
		} else {
			answer += myString[i];
		}
	}

	return answer;
}

// 예시
console.log(solution("abcdevwxyz"));

// string.charCodeAt(index);
// 문자를 아스키 코드 번호 변환 (charCodeAt()은 string 타입만 가능)

// 예시
// "hello".charCodeAt();  // 104 (맨 앞에 있는 문자만 반환)
// "hello".charCodeAt(0);  // 104 (인덱스 번호를 인자로 넣어주면, 문자열 내 해당 인덱스에 존재하는 문자가 변환)
// "hello".charCodeAt(1);  // 101
