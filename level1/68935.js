function solution(n) {
	const trinaryNum = parseInt(n, 10).toString(3);
	const reverseTrinaryNum = trinaryNum.split("").reverse().join("");
	const newNum = parseInt(reverseTrinaryNum, 3).toString(10);

	return Math.floor(newNum);
}
