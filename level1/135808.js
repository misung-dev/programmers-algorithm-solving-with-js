function solution(k, m, score) {
	let sum = 0;

	newScore = score.sort((a, b) => b - a); // 내림차순 정렬

	for (let i = 0; i < newScore.length; i += m) {
		const currentPackage = newScore.slice(i, i + m); // 현재 판매할 상자의 사과들

		if (currentPackage.length === m) {
			sum += Math.min(...currentPackage) * m;
		}
	}
	return sum;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
