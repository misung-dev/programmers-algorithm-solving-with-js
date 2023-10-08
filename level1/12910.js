function solution(arr, divisor) {
	const filteredArray = arr.filter((num) => num % divisor === 0);

	return filteredArray.length === 0 ? [-1] : filteredArray.sort((a, b) => a - b);
}
