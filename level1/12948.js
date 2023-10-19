// solution1
function solution1(phone_number) {
	const num = phone_number.length - 4;
	return "*".repeat(num) + phone_number.slice(-4);
}

// solution2
function solution2(phone_number) {
	return phone_number.replace(/\d(?=\d{4})/g, "*");
}
