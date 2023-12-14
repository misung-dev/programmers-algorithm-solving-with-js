function solution(my_string) {
	let word = [];

	for (let i = 0; i < my_string.length; i++) {
		word.push(my_string.slice(i));
	}
	return word.sort();
}

// 테스트 케이스
console.log(solution("banana")); // ["a", "ana", "anana", "banana", "na", "nana"]
