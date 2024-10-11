// 2016년

function solution(a, b) {
	const dayCount = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

	let daySum = 0;

	for (let i = 0; i < a - 1; i++) {
		daySum += dayCount[i];
	}
	daySum += b;

	let answer = (daySum + 4) % 7;

	return week[answer];
}

// 테스트 케이스
console.log(solution(5, 24)); // "TUE"
console.log(solution(1, 1)); // "FRI"
