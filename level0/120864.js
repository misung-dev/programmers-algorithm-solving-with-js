// solution1
function solution1(my_string) {
	let numbers = my_string.match(/\d+/g);

	if (numbers) {
		answer = numbers.reduce((acc, cur) => acc + parseInt(cur, 10), 0);
	}

	return answer;
}

// solution2 (런타임 오류 해결)
function solution(my_string) {
	const numbers = my_string.match(/\d+/g) || []; //numbers가 null인 경우 처리
	return numbers.reduce((acc, cur) => acc + parseInt(cur, 10), 0);
}

// 테스트 케이스
console.log(solution("aAb1B2cC34oOp")); //37
