// solution1
function solution1(arr) {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		for (j = 0; j < arr[i]; j++) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

// solution2
function solution2(arr) {
	let newArr = [];

	arr.map((a) => {
		for (let i = 0; i < a; i++) {
			newArr.push(a);
		}
	});

	return newArr;
}

// 예시
console.log(solution1([5, 1, 4])); // [5, 5, 5, 5, 5, 1, 4, 4, 4, 4]
