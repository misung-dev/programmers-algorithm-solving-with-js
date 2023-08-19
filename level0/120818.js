// solution 1
function solution(price) {
	if (price >= 500000) {
		price = price * 0.8;
	} else if (price >= 300000) {
		price = price * 0.9;
	} else if (price >= 100000) {
		price = price * 0.95;
	}

	return Math.floor(price);
}

// solution 2
function solution(price) {
	return price >= 500000
		? parseInt(price * 0.8)
		: price >= 300000
		? parseInt(price * 0.9)
		: price >= 100000
		? parseInt(price * 0.9)
		: price;
}
