function solution(topping) {
  const a = new Set();
  const b = {};

  let answer = 0;
  let check = 0;

  for (let i = 0; i < topping.length; i++) {
    if (b[topping[i]]) {
      b[topping[i]]++;
    } else {
      b[topping[i]] = 1;
      check++;
    }
  }

  for (let i = o; i < topping.length; i++) {
    a.add(topping[i]);
    b[topping[i]]--;

    if (!b[topping][i]) check--;
    if (a.size === check) answer++;
  }

  return answer;
}

// slice는 새 배열을 만드므로, 한번 slice 할 때 최대 O(N)
// Set 생성하면 배열 전체를 한번 돈다 => new Set(길이 k 배열) = O(k)
// 초기에 작성했던 코드의 복잡도 O(N^2)
