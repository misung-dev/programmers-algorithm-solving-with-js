// solution 1
function solution(my_string) {
	newString = [...my_string.replace(/[^0-9]/g, "")];
	var sum = 0;

	for (i = 0; i < newString.length; i++) {
		sum += parseInt(newString[i]);
	}
	return sum;
}

// solution 2
function solution(my_string) {
	const answer = my_string
		.replace(/[^0-9]/g, "")
		.split("")
		.reduce((acc, curr) => acc + Number(curr), 0);
	return answer;
}
