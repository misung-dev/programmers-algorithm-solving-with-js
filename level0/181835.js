// solution 1
function solution(arr, k) {
	let answer = [];

	if (k % 2 === 1) {
		for (i = 0; i < arr.length; i++) {
			answer.push(arr[i] * k);
		}
	} else {
		for (i = 0; i < arr.length; i++) {
			answer.push(arr[i] + k);
		}
	}
	return answer;
}

// solution 2
function solution(arr, k) {
	let answer = [];

	for (num of arr) {
		if (k % 2 == 0) {
			answer.push(num + k);
		} else {
			answer.push(num * k);
		}
	}
	return answer;
}

// solution 3
function solution(arr, k) {
	let answer = [];

	if (k % 2 == 0) {
		answer = arr.map((v) => v + k);
	} else {
		answer = arr.map((v) => v * k);
	}
	return answer;
}
