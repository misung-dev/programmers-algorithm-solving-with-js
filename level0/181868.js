// solution1
function solution1(my_string) {
	return my_string.trim().split(/\s+/);
}

// solution2
function solution2(my_string) {
	return my_string.split(" ").filter((v) => v);
}
