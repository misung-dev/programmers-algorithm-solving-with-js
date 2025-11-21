// 주식가격

function solution(prices) {
  let period = [];

  for (let i = 0; i < prices.length; i++) {
    let up = 0;

    for (let j = i + 1; j < prices.length; j++) {
      up++;

      if (prices[i] > prices[j]) {
        break;
      }
    }
    period.push(up);
  }
  return period;
}
