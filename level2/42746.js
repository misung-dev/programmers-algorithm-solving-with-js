// 가장 큰 수

function solution(numbers) {
  let arr = numbers.map(String);

  arr.sort((a, b) => {
    const ab = a + b;
    const ba = b + a;

    if (ab === ba) return 0;

    return ab > ba ? -1 : 1;
  });

  if (arr[0] === "0") return "0";

  return arr.join("");
}
