function solution(num) {
	const arrNum = Array.from(String(num), Number);
	let age = "";

	for (let i = 0; i < arrNum.length; i++) {
		const charCode = arrNum[i] + 97; // 'a'의 ASCII 코드는 97
		age += String.fromCharCode(charCode);
	}

	return age;
}

// 예시
console.log(solution(23)); // 'cd'
