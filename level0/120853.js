// solution1
function solution1(s) {
	let sum = 0;
	const newS = s.split(" ");

	for (let i = 0; i < newS.length; i++) {
		if (newS[i + 1] !== "Z" && !isNaN(parseInt(newS[i]))) {
			sum += parseInt(newS[i]);
		}
	}

	return sum;
}

// solution2
function solution(s) {
	let newS = s.split(" ");

	for (let i = 0; i < newS.length; i++) {
		if (newS[i] === "Z") {
			newS.splice(i - 1, 2);
			i -= 2; // 인덱스 조정
		}
	}

	return newS.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
}

// 테스트 케이스
console.log(solution("1 2 Z 3")); //4
console.log(solution("10 20 30 40")); // 100
console.log(solution("10 Z 20 Z 1")); // 1
console.log(solution("-1 -2 -3 Z")); // -3
