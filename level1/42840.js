// 모의고사

function solution(answers) {
  let getCorrectAnswerCountsList = [0, 0, 0];
  const STUDENT_1 = [1, 2, 3, 4, 5];
  const STUDENT_2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const STUDENT_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (STUDENT_1[i % STUDENT_1.length] === answers[i]) {
      getCorrectAnswerCountsList[0] += 1;
    }
    if (STUDENT_2[i % STUDENT_2.length] === answers[i]) {
      getCorrectAnswerCountsList[1] += 1;
    }
    if (STUDENT_3[i % STUDENT_3.length] === answers[i]) {
      getCorrectAnswerCountsList[2] += 1;
    }
  }

  const maxScore = Math.max(...getCorrectAnswerCountsList);
  const getMaxScoreStudentList = getCorrectAnswerCountsList
    .map((score, index) => (score === maxScore ? index + 1 : null))
    .filter((student) => student !== null);
  return getMaxScoreStudentList;
}

// 테스트 케이스
console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]
