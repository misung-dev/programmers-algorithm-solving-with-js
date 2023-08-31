// solution 1
function solution(arr) {
	let answer = [];

	for (i = 0; i < arr.length; i++) {
		if (arr[i] >= 50 && arr[i] % 2 === 0) {
			answer.push(arr[i] / 2);
		} else if (arr[i] < 50 && arr[i] % 2 === 1) {
			answer.push(arr[i] * 2);
		} else {
			answer.push(arr[i]);
		}
	}
	return answer;
}

// solution 2
function solution(arr) {
	let answer = [];

	arr.map((a) => {
		if (a >= 50 && a % 2 == 0) {
			answer.push(a / 2);
		} else if (a < 50 && a % 2 == 1) {
			answer.push(a * 2);
		} else {
			answer.push(a);
		}
	});
	return answer;
}
