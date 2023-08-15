// solution 1
function solution(my_string) {
	low_str = my_string.toLowerCase();
	return [...low_str].sort().join("");
}

// solution 2
function solution(my_string) {
	return [...my_string.toLowerCase()].sort().join("");
}

// solution 3
function solution(my_string) {
	return my_string.toLowerCase().split("").sort().join("");
}
