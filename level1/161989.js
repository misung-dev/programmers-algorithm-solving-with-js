function solution(n, m, section) {
  let count = 0;

  for (let i = 0; i < section.length; i++) {
    let color = section[i] + (m - 1);
    count++;

    for (let j = i + 1; j < section.length; j++) {
      if (section[j] <= color) {
        i++;
      } else {
        break;
      }
    }
  }

  return count;
}
