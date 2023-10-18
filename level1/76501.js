// solution1
function solution1(absolutes, signs) {
	let sum = 0;

	for (i = 0; i < absolutes.length; i++) {
		if (signs[i] === true) {
			sum += absolutes[i];
		} else {
			sum -= absolutes[i];
		}
	}
	return sum;
}

// solution2
function solution2(absolutes, signs) {
	let sum = 0;

	for (i = 0; i < absolutes.length; i++) {
		signs[i] ? (sum += absolutes[i]) : (sum -= absolutes[i]);
	}
	return sum;
}

solution3;
function solution3(absolutes, signs) {
	return absolutes.reduce((acc, cur, i) => acc + cur * (signs[i] ? 1 : -1), 0);
}
