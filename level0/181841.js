// solution 1
function solution(str_list, ex) {
	let answer = "";

	for (i = 0; i < str_list.length; i++) {
		if (!str_list[i].includes(ex)) {
			answer += str_list[i];
		}
	}
	return answer;
}

// solution2
const solution = (str_list, ex) => str_list.filter((v) => !v.includes(ex)).join("");
