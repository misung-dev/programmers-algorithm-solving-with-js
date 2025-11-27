function solution(id_list, report, k) {
  // 1. 중복 제거
  // indexOf가 내부에서 매번 0 ~ i 까지 순회 → 전체 O(n²)
  // const uniqueReport = report.filter((element, index) => {
  //   return report.indexOf(element) === index;
  // });

  // Set은 삽입/중복 체크가 평균 O(1) → 전체 O(n)
  const uniqueReport = [...new Set(report)];

  // 2. 신고한 사람, 신고당한 사람 카운트용 객체
  let reporter = {};
  let reportee = {};

  // 3. reporter 초기화 (메일 수)
  id_list.forEach((id) => {
    reporter[id] = 0;
  });

  // 4. "신고자 신고대상" 형태를 2차원 배열로
  const newArr = uniqueReport.map((element) => element.split(" "));

  // 5. 신고당한 횟수 세기
  newArr.forEach(([from, to]) => {
    if (reportee[to]) {
      reportee[to]++;
    } else {
      reportee[to] = 1;
    }
  });

  // 6. k회 이상 신고당한 유저들 (정지 대상)
  // const blockedUser = [];
  // for (const id in reportee) {
  //   if (reportee[id] >= k) {
  //     blockedUser.push(id);
  //   }
  // }
  const blockedUser = new Set();
  for (const id in reportee) {
    if (reportee[id] >= k) {
      blockedUser.add(id);
    }
  }

  // 7. 정지 대상들을 신고한 사람에게 메일 +1
  // includes는 배열 전체를 돌면서 비교 → O(n)
  // newArr 길이가 최대 보고 수 200,000이니까 최악의 경우 또 O(n²)
  // newArr.forEach(([from, to]) => {
  //   if (blockedUser.includes(to)) {
  //     reporter[from]++;
  //   }
  // });

  // Set.has는 평균 O(1) → 전체 O(n)
  newArr.forEach(([from, to]) => {
    if (blockedUser.has(to)) {
      reporter[from]++;
    }
  });

  // 8. id_list 순서대로 메일 수 배열 반환
  return id_list.map((id) => reporter[id]);
}
