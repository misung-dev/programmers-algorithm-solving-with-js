// solution 1
function solution1(n_str) {
	let answer = "";

	for (let i = 0; i < n_str.length; i++) {
		if (n_str[i] !== "0") {
			answer += n_str[i];
		} else if (answer != "") {
			answer += n_str[i];
		}
	}
	return answer;
}

// solution2
const solution2 = (n_str) => String(Number(n_str));

// solution3
function solution3(n_str) {
	return n_str.replace(/^0+/, "");
}
