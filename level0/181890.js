// solution1
function solution1(str_list) {
	let answer = [];
	const leftIndex = str_list.indexOf("l");
	const rightIndex = str_list.indexOf("r");

	if (leftIndex !== -1 && (rightIndex === -1 || leftIndex < rightIndex)) {
		answer = str_list.slice(0, leftIndex);
	} else if (rightIndex !== -1) {
		answer = str_list.slice(rightIndex + 1);
	}

	return answer;
}

// solution2
function solution(str_list) {
	for (let i = 0; i < str_list.length; i++) {
		if (str_list[i] === "l") return str_list.slice(0, i);
		if (str_list[i] === "r") return str_list.slice(i + 1);
	}
	return [];
}

// 테스트 케이스
console.log(solution(["u", "u", "l", "r"])); // ["u", "u"]
console.log(solution(["l"])); // []
