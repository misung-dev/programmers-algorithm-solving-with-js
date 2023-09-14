// solution 1
function solution1(my_string, alp) {
	let answer = "";

	for (i = 0; i < my_string.length; i++) {
		if (my_string[i] === alp) {
			answer += my_string[i].toUpperCase();
		} else {
			answer += my_string[i];
		}
	}
	return answer;
}

// solution 2
const solution2 = (my_string, alp) => my_string.replaceAll(alp, alp.toUpperCase());
