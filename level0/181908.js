// solution 1
function solution(my_string, is_suffix) {
	return my_string.slice(-is_suffix.length) === is_suffix ? 1 : 0;
}

// solution 2
function solution(my_string, is_suffix) {
	return my_string.slice(my_string.length - is_suffix.length) === is_suffix ? 1 : 0;
}

// solution 3
const solution = (my_string, is_suffix) => (my_string.endWith(is_suffix) ? 1 : 0);
