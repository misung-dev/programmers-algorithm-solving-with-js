function solution(s) {
  let answer = "";
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let i = 0;

  while (i < s.length) {
    const ch = s[i];

    // 숫자라면
    if (ch >= "0" && ch <= "9") {
      answer += ch;
      i++;
    } else {
      // 단어라면
      const matchIndex = words.findIndex((word) => s.startsWith(word, i));
      answer += matchIndex;
      i += words[matchIndex].length;
    }
  }

  return Number(answer);
}

// 예시
console.log(solution("one4seveneight")); // 1478
console.log(solution("23four5six7")); // 234567
