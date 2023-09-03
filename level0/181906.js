// solution 1
function solution(my_string, is_prefix) {
	return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;
}

// solution 2
function solution(my_string, is_prefix) {
	return +my_string.startsWith(is_prefix);
}
