// solution 1
function solution(order) {
	let answer = 0;

	for (i = 0; i < order.toString().length; i++) {
		const digit = parseInt(order.toString()[i]);

		if (digit === 3 || digit === 6 || digit === 9) {
			answer += 1;
		}
	}
	return answer;
}

// solution 2
function solution(order) {
	let answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
	return answer;
}
