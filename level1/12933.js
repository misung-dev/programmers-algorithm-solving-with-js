// solution1
function solution1(num) {
	return Number(
		num
			.toString()
			.split("")
			.sort((a, b) => b - a)
			.join("")
	);
}

// solution2
function solution2(num) {
	return Number(num.toString().split("").sort().reverse().join(""));
}
