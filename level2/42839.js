function solution(numbers) {
  function combination(currNum) {
    if (currNum.length > 0) {
      result.add(Number(currNum));
    }

    for (let i = 0; i < numbers.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        combination(currNum + numbers[i]);
        visited[i] = false;
      }
    }
  }

  const result = new Set();
  const visited = new Array(numbers.length).fill(false);

  combination("");

  return Array.from(result).filter(isPrime).length;
}

// 소수판별 함수 만들기
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}
