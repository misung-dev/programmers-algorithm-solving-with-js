// solution 1
function solution(array) {
	let answer = 0;
	let newArr = array.join("").split("");

	for (i = 0; i < newArr.length; i++) {
		if (newArr[i] === "7") {
			answer += 1;
		}
	}
	return answer;
}

// solution 2
function solution(array) {
	return array.join("").split("7").length - 1;
}

// solution 3
function solution(array) {
	return array
		.join("")
		.split("7")
		.reduce((acc, v) => {
			if (v === "7") acc++;
			return acc;
		}, 0);
}
