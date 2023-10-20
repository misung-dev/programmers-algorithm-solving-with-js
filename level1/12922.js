// solution1
const solution1 = (n) => "수박".repeat(n / 2) + (n % 2 ? "수" : "");
// 나머지가 있으면 '수'를 출력

// solution2
const solution2 = (n) => "수박".repeat(n).slice(0, n);
