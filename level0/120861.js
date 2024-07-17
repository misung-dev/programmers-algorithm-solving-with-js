// solution1
function solution(keyinput, board) {
	let res = [0, 0];
	let rowMax = parseInt(board[0] / 2);
	let columnMax = parseInt(board[1] / 2);

	for (let p of keyinput) {
		switch (p) {
			case "left":
				if (res[0] > -rowMax) {
					res[0]--;
				}
				break;

			case "right":
				if (res[0] < rowMax) {
					res[0]++;
				}
				break;

			case "up":
				if (res[1] < columnMax) {
					res[1]++;
				}
				break;

			case "down":
				if (res[1] > -columnMax) {
					res[1]--;
				}
				break;
		}
	}
	return res;
}

// solution 2
function solution1(keyinput, board) {
	let row = 0;
	let column = 0;
	let rowMax = parseInt(board[0] / 2);
	let columnMax = parseInt(board[1] / 2);

	for (let i = 0; i < keyinput.length; i++) {
		switch (keyinput[i]) {
			case "left":
				if (Math.abs(row - 1) <= rowMax) {
					row -= 1;
				}
				break;
			case "right":
				if (Math.abs(row + 1) <= rowMax) {
					row += 1;
				}
				break;
			case "down":
				if (Math.abs(column - 1) <= columnMax) {
					column -= 1;
				}
				break;
			case "up":
				if (Math.abs(column + 1) <= columnMax) {
					column += 1;
				}
				break;
		}
	}

	return [row, column];
}

// 테스트 케이스
console.log(solution(["left", "right", "up", "right", "right"], [11, 11])); // [2, 1]
console.log(solution(["down", "down", "down", "down", "down"], [7, 9])); // [0, -4]
