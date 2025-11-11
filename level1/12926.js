function solution(s, n) {
  let answer = "";
  const arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];

    if (str === " ") {
      answer += " ";
      continue;
    }

    const ascii = arr[i].charCodeAt();

    if (ascii >= 65 && ascii <= 90) {
      answer += String.fromCharCode(((ascii - 65 + n) % 26) + 65);
    }

    if (ascii >= 97 && ascii <= 122) {
      answer += String.fromCharCode(((ascii - 97 + n) % 26) + 97);
    }
  }

  return answer;
}

// 테스트 케이스
console.log(solution("AB", 1)); // "BC"
console.log(solution("z", 1)); // "a"
console.log(solution("a B z", 4)); // "e F d"
