// H-Index

// solution1
function solution1(citations) {
  let count = citations.length;
  const sortedCitations = citations.sort((a, b) => b - a);

  for (let i = 0; i < sortedCitations.length; i++) {
    if (sortedCitations[i] === i + 1 || sortedCitations.length === 1) {
      return i + 1;
    }
    if (sortedCitations[i] <= i + 1) {
      return i;
    }
  }
  return count;
}

// solution2
function solution2(citations) {
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= i) {
      return i;
    }
  }

  return citations.length;
}

// solution3
function solution(citations) {
  let arr = citations.sort((a, b) => b - a);

  // for문 로직이 곧 H-index 정의라서, 분기처리 필요 없음
  // 대신 함수 가장 하단에 return 0 추가
  // const allSame = arr.every((v) => v === arr[0]);

  // if (allSame) {
  //   return Math.min(arr[0], arr.length);
  // }

  // 조건을 만족하는 h값 중 가장 큰 값을 찾기 위해 큰 수부터 순회
  for (let i = arr.length; i > 0; i--) {
    let h = i;
    let count = 0;
    arr.forEach((v) => {
      if (v >= h) {
        count++;
      }
    });

    // arr에서 h이상의 값이 h개 이상이 되는지 확인
    if (count >= h) {
      return h;
    }
  }

  return 0;
}

// solution 4
function solution(citations) {
  citations.sort((a, b) => b - a);

  let h = 0;

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1;
    } else {
      break;
    }
  }

  return h;
}

// 테스트 케이스
console.log(solution([3, 0, 6, 1, 5])); // 3
console.log(solution([5, 5, 5, 5, 5])); // 5
console.log(solution([10])); // 1
console.log(solution([25, 8, 5, 3, 3])); // 3
console.log(solution([10, 8, 5, 4, 3, 2, 1])); // 4
console.log(solution([12, 3, 9, 7, 4, 10, 5])); // 5
console.log(solution([1000, 1000, 1000, 1000])); // 4
