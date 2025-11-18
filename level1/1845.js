function solution(nums) {
  let answer = [];
  const half = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    if (answer.length < half) {
      if (!answer.includes(nums[i])) {
        answer.push(nums[i]);
      }
    }
  }

  return answer.length;
}
