// solution1
function solution1(t, p) {
	let num = [];
	let count = 0;

	for (i = 0; i < t.length - p.length + 1; i++) {
		let word = t.slice(i, i + p.length);
		num.push(word);
	}

	for (i = 0; i < num.length; i++) {
		if (num[i] <= p) count++;
	}
	return count;
}

// solution2
function solution2(t, p) {
	let count = 0;

	for (i = 0; i <= t.length - p.length; i++) {
		let word = t.slice(i, i + p.length);
		if (+p >= word) count++;
	}
	return count;
}
