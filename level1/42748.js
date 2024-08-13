// solution 1
function solution1(array, commands) {
	let answer = [];

	for (let i = 0; i < commands.length; i++) {
		let arr = array.slice(commands[i][0] - 1, commands[i][1]);
		let newArr = arr.sort((a, b) => a - b);
		answer.push(newArr[commands[i][2] - 1]);
	}

	return answer;
}

// solution 2
function solution(array, commands) {
	return commands.map((command) => {
		const [sPosition, ePosition, position] = command;
		const newArray = array
			.filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
			.sort((a, b) => a - b);

		return newArray[position - 1];
	});
}

// 테스트 케이스
console.log(
	solution(
		[1, 5, 2, 6, 3, 7, 4],
		[
			[2, 5, 3],
			[4, 4, 1],
			[1, 7, 3],
		]
	)
); // [5, 6, 3]
