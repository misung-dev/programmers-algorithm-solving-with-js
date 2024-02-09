// solution1
function solution1(my_string) {
	let answer = Array(52).fill(0);

	for (let i = 0; i < my_string.length; i++) {
		let charCode = my_string.charCodeAt(i);

		if (charCode >= 65 && charCode <= 90) {
			answer[charCode - 65]++;
		} else if (charCode >= 97 && charCode <= 122) {
			answer[charCode - 71]++;
		}
	}

	return answer;
}

// solution2
function solution(my_string) {
	let answer = Array(52).fill(0);
	let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

	my_string.split("").map((i) => {
		answer[al.indexOf(i)] += 1;
	});
	return answer;
}

// 테스트 케이스
console.log(solution("Programmers"));
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]
