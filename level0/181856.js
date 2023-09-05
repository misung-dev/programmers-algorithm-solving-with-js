// solution 1
function solution(arr1, arr2) {
	let arr1Sum = 0;
	let arr2Sum = 0;

	if (arr1.length > arr2.length) {
		return 1;
	} else if (arr1.length < arr2.length) {
		return -1;
	} else {
		for (i = 0; i < arr1.length; i++) {
			arr1Sum += arr1[i];
			arr2Sum += arr2[i];
		}
		if (arr1Sum > arr2Sum) {
			return 1;
		} else if (arr1Sum < arr2Sum) {
			return -1;
		} else {
			return 0;
		}
	}
}

// solution 2
function solution(arr1, arr2) {
	var answer = 0;
	if (arr1.length !== arr2.length) {
		answer = arr1.length > arr2.length ? 1 : -1;
	} else {
		answer =
			arr1.reduce((a, b) => a + b) > arr2.reduce((a, b) => a + b)
				? 1
				: arr1.reduce((a, b) => a + b) == arr2.reduce((a, b) => a + b)
				? 0
				: -1;
	}
	return answer;
}
