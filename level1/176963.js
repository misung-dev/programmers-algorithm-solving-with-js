function solution(name, yearning, photo) {
	let answer = [];

	for (i = 0; i < photo.length; i++) {
		let sum = 0;
		for (j = 0; j < photo[i].length; j++) {
			const person = photo[i][j];
			const personIndex = name.indexOf(person);
			if (personIndex !== -1) {
				sum += yearning[personIndex];
			}
		}
		answer.push(sum);
	}
	return answer;
}
