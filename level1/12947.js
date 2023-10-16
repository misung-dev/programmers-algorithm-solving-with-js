function solution(num) {
	let sum = num
		.toString()
		.split("")
		.reduce((acc, cur) => +acc + +cur, 0);

	return num % sum === 0 ? true : false;
}
