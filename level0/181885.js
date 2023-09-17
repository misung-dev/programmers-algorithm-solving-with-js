// solution1
function solution1(todo_list, finished) {
	let answer = [];

	for (i = 0; i < finished.length; i++) {
		if (finished[i] === false) {
			answer.push(todo_list[i]);
		}
	}
	return answer;
}

// solution2
function solution2(todo_list, finished) {
	let answer = [];
	return todo_list.filter((e, i) => !finished[i]);
}
