// solution 1
function solution(chicken) {
	let coupon = 0;

	while (chicken >= 10) {
		const freechickens = Math.floor(chicken / 10);
		coupon += freechickens;
		chicken = freechickens + (chicken % 10);
	}
	coupon += Math.floor(chicken / 10);

	return coupon;
}

// solution 2
function solution(chicken) {
	let answer = 0;
	let coupon = chicken;

	while (coupon >= 10) {
		coupon += Math.floor(coupon / 10);
		coupon += Math.floor(coupon / 10) + (coupon % 10);
	}
	return answer;
}
