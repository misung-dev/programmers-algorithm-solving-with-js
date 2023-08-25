// solution 1
function solution(num_list) {
	return num_list.length >= 11
		? num_list.reduce((acc, cur) => acc + cur, 0)
		: num_list.reduce((acc, cur) => acc * cur, 1);
}

// solution 2
const solution = (num_list) =>
	num_list.reduce((acc, cur) => (num_list.length > 10 ? acc + cur : acc * cur));
