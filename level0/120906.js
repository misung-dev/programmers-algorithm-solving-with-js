function solution(n) {
	var sum = 0;
	var nums = n.toString().split("");

	for (var i = 0; i < nums.length; i++) {
		sum += parseInt(nums[i]);
	}
	return sum;
}

// function solution(n) {
//   return n
//     .toString()
//     .split("")
//     .reduce((acc, cur) => acc + Number(cur), 0);
// }
