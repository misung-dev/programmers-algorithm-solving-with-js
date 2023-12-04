// solution 1
function solution1(n, control) {
	let answer = n;

	for (let i of control) {
		if (i === "w") {
			answer += 1;
		} else if (i === "s") {
			answer -= 1;
		} else if (i === "d") {
			answer += 10;
		} else {
			answer -= 10;
		}
	}
	return answer;
}

// solution 2
function solution2(n, control) {
	return [...control].map((x) => setValue(x)).reduce((a, b) => a + b, n);
}
function setValue(s) {
	return s === "w" ? 1 : s === "s" ? -1 : s === "d" ? 10 : -10;
}

// 예시
console.log(solution2(0, "wsdawsdassw")); // -1
