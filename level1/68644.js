function solution1(numbers) {
  let answer = [];

  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (answer.indexOf(sum) === -1) {
        answer.push(sum);
      }
    }
  }

  answer.sort((a, b) => a - b);

  return answer;
}

function solution(numbers) {
  let sumArr = [];

  // 덧셈 계산
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sum = numbers[i] + numbers[j];
      sumArr.push(sum);
    }
  }

  // 중복된 숫자 제거
  let uniqueArr = sumArr.filter((element, index) => {
    return sumArr.indexOf(element) === index;
  });

  uniqueArr.sort((a, b) => a - b);

  return uniqueArr;
}
