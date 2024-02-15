// solution1
function solution1(A, B) {
	if (A === B) return 0;
	for (let i = 0; i < A.length; i++) {
		A = A.slice(-1) + A.slice(0, -1);
		if (A === B) return i + 1;
	}
	return -1;
}

// solution2
const solution = (A, B) => (B + B).indexOf(A);

// 테스트 케이스
console.log(solution("hello", "ohell")); // 1
console.log(solution("apple", "elppa")); // -1
console.log(solution("atat", "tata")); // 1
console.log(solution("abc", "abc")); // 0
