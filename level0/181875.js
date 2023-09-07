// solution 1
function solution(strArr) {
	let answer = [];

	for (i = 0; i < strArr.length; i += 2) {
		answer.push(strArr[i].toLowerCase());

		if (i + 1 < strArr.length) {
			answer.push(strArr[i + 1].toUpperCase());
		}
	}
	return answer;
}

// solution 2
function solution(strArr) {
	let answer = [];
	strArr.forEach((arr, idx) => {
		if (idx % 2 === 0) answer.push(arr.toLowerCase());
		else answer.push(arr.toUpperCase());
	});
	return answer;
}

// solution 3
function solution(strArr) {
	return strArr.map((arr, idx) => (idx % 2 === 0 ? arr.toLowerCase() : arr.toUpperCase()));
}
