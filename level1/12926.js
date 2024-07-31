function solution(s, n) {
	let answer = "";
	arr = [...s];

	for (i = 0; i < s.length; i++) {
		if (s[i] === " ") {
			answer += " ";
		} else {
			num = s[i].charCodeAt();
			let isUpperCase = num >= 65 && num <= 90;
			let isLowerCase = num >= 97 && num <= 122;

			if (isUpperCase) {
				num = ((num - 65 + n) % 26) + 65;
			} else if (isLowerCase) {
				num = ((num - 97 + n) % 26) + 97;
			}
			answer += String.fromCharCode(num);
		}
	}

	return answer;
}

// 테스트 케이스
console.log(solution("AB", 1)); // "BC"
console.log(solution("z", 1)); // "a"
console.log(solution("a B z", 4)); // "e F d"

// 알파벳 내 순환 구현
// (charCode - base + n) % 26
// 새로운 ASCII 코드값을 얻기 위해
// 65, 97을 더해줌
