function solution(my_str, n) {
	let answer = [];

	for (let i = 0; i < my_str.length; i += n) {
		const slicedStr = my_str.slice(i, i + n);
		answer.push(slicedStr);
	}

	return answer;
}

// 테스트 케이스
console.log(solution("abc1Addfggg4556b", 6)); // 	["abc1Ad", "dfggg4", "556b"]
