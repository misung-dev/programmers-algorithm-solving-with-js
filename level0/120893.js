// solution1
function solution1(my_string) {
	let answer = "";

	for (i = 0; i < my_string.length; i++) {
		if (my_string[i] === my_string[i].toUpperCase()) {
			answer += my_string[i].toLowerCase();
		} else {
			answer += my_string[i].toUpperCase();
		}
	}

	return answer;
}

// solution2
function solution2(my_string) {
	let answer = "";
	for (c of my_string) answer += c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
	return answer;
}

// solution3
function solution3(my_string) {
	return my_string
		.split("")
		.map((n) => (n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()))
		.join("");
}
