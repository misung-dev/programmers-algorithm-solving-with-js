// solution1
function solution1(num_list) {
	let odd = 0;
	let even = 0;

	for (i = 0; i < num_list.length; i++) {
		if (i % 2 === 0) {
			even += num_list[i];
		} else {
			odd += num_list[i];
		}
	}
	return Math.max(odd, even);
}

// solution2
function solution2(num_list) {
	let even = 0;
	let odd = 0;

	num_list.map((v, idx) => {
		!(idx % 2) ? (even += v) : (odd += v);
	});

	return even > odd ? even : odd;
}
