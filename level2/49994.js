function solution(dirs) {
  let position = [0, 0];
  let history = [];

  // 문자열을 순회하면서 U, D, R, L 확인
  // 각 문자열에 맞게 상하좌우로 이동하되
  // 최대값인 5를 초과해서 이동이 안되는 조건문 추가
  for (let i = 0; i < dirs.length; i++) {
    const before = [...position];

    if (dirs[i] === "U" && position[1] !== 5) position[1] += 1;
    if (dirs[i] === "D" && position[1] !== -5) position[1] -= 1;
    if (dirs[i] === "R" && position[0] !== 5) position[0] += 1;
    if (dirs[i] === "L" && position[0] !== -5) position[0] -= 1;

    const after = [...position];

    // 그렇게 해서 이동한거를 배열로 다 저장
    if (before[0] !== after[0] || before[1] !== after[1]) {
      history.push([before, after]);
    }
  }

  // 겹치는거 제외시키기
  const seen = new Set();
  const result = [];

  for (const block of history) {
    const [before, after] = block;

    const sorted = before < after ? [before, after] : [after, before];

    const path = JSON.stringify(sorted);

    if (!seen.has(path)) {
      seen.add(path);
      result.push(block);
    }
  }

  // 배열의 길이 구하기
  return result.length;
}
