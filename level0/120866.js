function solution(board) {
  const len = board.length;
  let safeArea = Array.from({ length: len }, () => Array(len).fill(true));
  let count = 0;

  const dx = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 0, 1, -1, 0, 1];

  for (let x = 0; x < len; x++) {
    for (let y = 0; y < len; y++) {
      if (board[x][y] === 1) {
        for (let k = 0; k < 9; k++) {
          const nx = x + dx[k];
          const ny = y + dy[k];

          // 경계 안에 있어야함
          if (nx >= 0 && nx < len && ny >= 0 && ny < len) {
            safeArea[nx][ny] = false;
          }
        }
      }
    }
  }

  // 안전 구역 count
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (safeArea[i][j] === true) {
        count++;
      }
    }
  }

  return count;
}
