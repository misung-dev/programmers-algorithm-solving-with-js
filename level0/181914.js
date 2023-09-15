// solution 1
function solution1(number) {
	if (Number(number) >= 0) {
		let num = 0;
		for (let i = 0; i < number.length; i++) {
			num += parseInt(number[i], 10);
		}
		return num % 9;
	}
}

// solution 2
function solution2(number) {
	let answer = 0;

	for (let i of number) {
		answer += Number(i);
	}
	return answer % 9;
}

// solution 3
function solution3(number) {
	return Array.from(number).reduce((acc, v) => acc + Number(v), 0) % 9;
}
