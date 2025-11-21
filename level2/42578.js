// 의상
function solution(clothes) {
  let closet = {};

  for (let i = 0; i < clothes.length; i++) {
    const type = clothes[i][1];

    if (closet[type]) {
      closet[type] += 1;
    } else {
      closet[type] = 1;
    }
  }

  let answer = 1;

  for (let value of Object.values(closet)) {
    answer *= value + 1;
  }

  return answer - 1;
}

function solution2(clothes) {
  let closet = {};

  for (let item of clothes) {
    if (item[1] in closet) {
      closet[item[1]]++;
    } else {
      closet[item[1]] = 1;
    }
  }

  // 의상을 입지 않는 경우인 1도 추가
  let combinations = Object.values(closet).reduce(
    (acc, value) => acc * (value + 1),
    1
  );

  // 아무 의상도 입지 않는 경우인 1 제외
  return combinations - 1;
}

// 테스트 케이스
console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
); // 5
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); // 3
