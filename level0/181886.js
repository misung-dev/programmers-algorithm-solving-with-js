// solution 1
function solution1(names) {
	let group = [];

	for (i = 0; i < names.length; i += 5) {
		group.push(names[i]);
	}
	return group;
}

// solution 2
function solution2(names) {
	const group = [];

	for (i = 0; i < names.length; i += 5) {
		group.push(names.slice(i, i + 5)[0]);
	}

	return group;
}

// solution 3
function solution3(names) {
	const group = [];

	for (i = 0; i < names.length; i++) {
		if (i % 5 === 0) {
			group.push(names[i]);
		}
	}
	return group;
}
