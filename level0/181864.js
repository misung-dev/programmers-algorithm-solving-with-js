// solution1
function solution1(myString, pat) {
	let arrStr = myString.split("");

	for (let i = 0; i < arrStr.length; i++) {
		if (arrStr[i] === "A") {
			arrStr[i] = "B";
		} else {
			arrStr[i] = "A";
		}
	}

	return arrStr.join("").includes(pat) ? 1 : 0;
}

// solution2
function solution2(myString, pat) {
	let answer = 0;

	myString.split("").map((v) => {
		if (v === "A") {
			answer += "B";
		} else {
			answer += "A";
		}
	});
	return answer.includes(pat) ? 1 : 0;
}

// solution3
const solution3 = (myString, pat) =>
	[...myString]
		.map((v) => (v === "A" ? "B" : "A"))
		.join("")
		.includes(pat)
		? 1
		: 0;

// 테스트 케이스
console.log(solution3("ABBAA", "AABB", 1)); // 1
