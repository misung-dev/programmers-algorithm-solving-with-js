// solution1
function solution1(n) {
	return [...String(n)].reduce((acc, cur) => acc + Number(cur), 0);
}

// solution2
const solution2 = (n) =>
	String(n)
		.split("")
		.reduce((acc, cur) => acc + cur * 1, 0);
