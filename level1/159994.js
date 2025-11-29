function solution1(cards1, cards2, goal) {
  let index1 = [];
  let index2 = [];

  for (let i = 0; i < goal.length; i++) {
    const idx1 = cards1.indexOf(goal[i]);
    const idx2 = cards2.indexOf(goal[i]);

    if (idx1 !== -1) {
      index1.push(idx1);
    } else {
      index1.push(-1);
    }

    if (idx2 !== -1) {
      index2.push(idx2);
    } else {
      index2.push(-1);
    }

    let filteredIndex1 = index1.filter((num) => num !== -1);
    let filteredIndex2 = index2.filter((num) => num !== -1);

    const isSame1 = filteredIndex1.every((v, i) => v === i);
    const isSame2 = filteredIndex2.every((v, i) => v === i);

    if (!isSame1 || !isSame2) {
      return "No";
    }
  }

  return "Yes";
}

function solution(cards1, cards2, goal) {
  for (const g of goal) {
    if (cards1[0] === g) {
      cards1.shift();
    } else if (cards2[0] === g) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
}
