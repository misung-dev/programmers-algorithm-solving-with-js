// solution 1
function solution1(arr, n) {
	if (arr.length % 2 === 0) {
		return arr.map((num, index) => {
			if (index % 2 === 1) {
				return num + n;
			} else {
				return num;
			}
		});
	} else {
		return arr.map((num, index) => {
			if (index % 2 === 1) {
				return num;
			} else {
				return num + n;
			}
		});
	}
}

// solution 2
function solution2(arr, n) {
	return arr.map((num, index) => {
		if (index % 2 === 0) {
			return arr.length % 2 === 0 ? num : num + n;
		} else {
			return arr.length % 2 === 0 ? num + n : num;
		}
	});
}
