// solution1
function solution1(str) {
	let answer = "";
	const newStr = [...str].sort();

	for (let i = 0; i < newStr.length; i++) {
		if (newStr[i] === newStr[i + 1]) {
			i = newStr.lastIndexOf(newStr[i]);
		} else {
			answer += newStr[i];
		}
	}

	return answer;
}

// solution2
function solution(str) {
	let answer = [];
	for (let i of str) {
		if (str.indexOf(i) === str.lastIndexOf(i)) {
			answer.push(i);
		}
	}
	return answer.sort().join("");
}

// 테스트 케이스
console.log(solution("abcabcadc")); // "d"
console.log(solution("abdc")); // "abcd"
