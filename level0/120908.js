// solution 1
function solution(str1, str2) {
	if (str1.indexOf(str2) !== -1) {
		return 1;
	} else {
		return 2;
	}
}

// solution 2
function solution(str1, str2) {
	return str1.includes(str2) ? 1 : 2;
}
