function solution(polynomial) {
	let answer = "";

	const newArr = polynomial.split(" ");
	let xNum = 0;
	let num = 0;

	for (let i = 0; i < newArr.length; i++) {
		let term = newArr[i];
		if (term.includes("x")) {
			let x = term === "x" ? 1 : Number(term.replace("x", ""));
			xNum += x;
		} else if (term !== "+") {
			num += Number(term);
		}
	}

	if (xNum === 0) {
		answer = String(num);
	} else if (num === 0) {
		answer = xNum === 1 ? "x" : xNum + "x";
	} else {
		answer = xNum === 1 ? "x + " + num : xNum + "x + " + num;
	}

	return answer;
}

// 테스트 케이스
console.log(solution("3x + 7 + x")); // "4x + 7"
console.log(solution("x + x + x")); // "3x"
