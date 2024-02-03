// solution1
function solution1(strArr) {
	let answer = [];

	for (let i = 0; i < strArr.length; i++) {
		if (!strArr[i].includes("ad")) {
			answer.push(strArr[i]);
		}
	}
	return answer;
}

// solution2
function solution(strArr) {
	strArr = strArr.filter((x) => {
		return x.indexOf("ad") === -1;
	});
	return strArr;
}

// 테스트 케이스
console.log(solution(["and", "notad", "abcd"])); // ["and","abcd"]
console.log(solution(["there", "are", "no", "a", "ds"])); // ["there","are","no","a","ds"]
