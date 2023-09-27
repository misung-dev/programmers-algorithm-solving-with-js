// solution1
function solution(myString) {
	let answer = [];
	let result = [];

	for (i = 0; i < myString.length; i++) {
		answer = myString.split("x");
	}

	for (i = 0; i < answer.length; i++) {
		result.push(answer[i].length);
	}

	return result;
}

// solution2
function solution(myString) {
	return myString.split("x").map((v) => v.length);
}

// solution3
function solution(myString) {
	let answer = [];
	myString.split("x").map((v) => answer.push(v.length));
	return answer;
}

// solution4
const solution = (myString) => {
	const arr = myString.split("x");
	return arr.reduce((a, c) => [...a, c.length], []);
};
