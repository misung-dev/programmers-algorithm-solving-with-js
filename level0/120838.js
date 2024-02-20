function solution(letter) {
	const morse = {
		".-": "a",
		"-...": "b",
		"-.-.": "c",
		"-..": "d",
		".": "e",
		"..-.": "f",
		"--.": "g",
		"....": "h",
		"..": "i",
		".---": "j",
		"-.-": "k",
		".-..": "l",
		"--": "m",
		"-.": "n",
		"---": "o",
		".--.": "p",
		"--.-": "q",
		".-.": "r",
		"...": "s",
		"-": "t",
		"..-": "u",
		"...-": "v",
		".--": "w",
		"-..-": "x",
		"-.--": "y",
		"--..": "z",
	};

	let answer = "";
	const words = letter.split(" ");

	for (let i = 0; i < words.length; i++) {
		answer += morse[words[i]];
	}
	return answer;
}

// 테스트 케이스
console.log(solution(".... . .-.. .-.. ---")); // "hello"
console.log(solution(".--. -.-- - .... --- -.")); // "python"
