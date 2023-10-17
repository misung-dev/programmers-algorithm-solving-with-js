// solution1
function solution1(num) {
	let count = 0;

	while (num !== 1) {
		if (count >= 500) {
			return -1;
		}

		if (num % 2 === 0) {
			num = num / 2;
		} else {
			num = num * 3 + 1;
		}

		count += 1;
	}

	return count;
}

// solution2
function solution2(num) {
	let count = 0;

	while (num != 1 && count != 500) {
		num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
		count++;
	}

	return num == 1 ? count : -1;
}

// solution3
function solution3(num) {
	let count = 0;

	while (count < 500) {
		if (num === 1) {
			return count;
		}
		count++;
		num = num % 2 === 0 ? num / 2 : num * 3 + 1;
	}

	return -1;
}
