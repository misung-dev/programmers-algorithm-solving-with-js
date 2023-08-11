function solution(n) {
	var sum = 0;
	var nums = n.toString().split("");

	for (var i = 0; i < nums.length; i++) {
		sum += nums[i];
	}
	return sum;
}
