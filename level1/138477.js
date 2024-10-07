// 명예의 전당 (1)

function solution(k, score) {
	let result = [];
	let hall = [];

	for (let i = 0; i < score.length; i++) {
		if (hall.length < k) {
			hall.push(score[i]);
		} else {
			let minHall = Math.min(...hall);
			if (score[i] > minHall) {
				hall.splice(hall.indexOf(minHall), 1);
				hall.push(score[i]);
			}
		}

		result.push(Math.min(...hall));
	}

	return result;
}

// 테스트 케이스
console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); // [10, 10, 10, 20, 20, 100, 100]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
