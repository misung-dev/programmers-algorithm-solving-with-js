function solution(my_string, target) {
	return my_string.includes(target) === true ? 1 : 0;
}

// 테스트 케이스
console.log(solution("banana", "ana")); // 1
console.log(solution("banana", "wxyz")); // 0
