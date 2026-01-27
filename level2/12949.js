// 행렬의 곱셈

function solution(arr1, arr2) {
  xlength = arr1.length;
  ylength = arr2[0].length;
  zlength = arr1[0].length;
  result = [];

  for (let i = 0; i < xlength; i++) {
    row = [];

    for (let j = 0; j < ylength; j++) {
      let sum = 0;

      for (let k = 0; k < zlength; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }

  return result;
}
