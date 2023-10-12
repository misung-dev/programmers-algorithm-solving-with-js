// solution1
function solution1(price, money, count) {
	let totalCost = 0;

	for (i = 1; i <= count; i++) {
		totalCost += price * i;
	}
	const shortfall = totalCost - money;

	return shortfall < 0 ? 0 : shortfall;
}

// solution2 (가우스 공식 활용)
function solution2(price, money, count) {
	const shortfall = (price * count * (count + 1)) / 2 - money;
	return shortfall > 0 ? shortfall : 0;
}
