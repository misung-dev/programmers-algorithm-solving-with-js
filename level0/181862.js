function solution(myStr) {
	const answer = myStr.split(/[abc]+/).filter(Boolean);
	return answer.length > 0 ? answer : ["EMPTY"];
}

// 테스트 케이스
console.log(solution("baconlettucetomato")); // ["onlettu", "etom", "to"]
