// solution1
function solution1(str1, str2) {
	if (str2.includes(str1)) {
		return 1;
	}
	return 0;
}

// solution2
function solution2(str1, str2) {
	return +str2.includes(str1);
}

// solution3
const solution3 = (str1, str2) => (str2.includes(str1) ? 1 : 0);
