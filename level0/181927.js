// solution 1
function solution(num_list) {
	const lastValue = num_list.length - 1;

	if (num_list[lastValue] > num_list[lastValue - 1]) {
		num_list.push(num_list[lastValue] - num_list[lastValue - 1]);
	} else {
		num_list.push(num_list[lastValue] * 2);
	}

	return num_list;
}
