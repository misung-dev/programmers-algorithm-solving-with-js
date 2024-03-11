// solution1
function solution(n) {
	let sum = 0;
	let nums = n.toString().split("");

	for (let i = 0; i < nums.length; i++) {
		sum += parseInt(nums[i]);
	}
	return sum;
}

// solution2
function solution(n) {
	return n
		.toString()
		.split("")
		.reduce((acc, cur) => acc + Number(cur), 0);
}

// 테스트 케이스
console.log(solution(1234)); // 10
console.log(solution(930211)); // 16
