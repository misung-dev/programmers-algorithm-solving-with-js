// 모의고사

function solution(answers) {
  let getCorrectAnswerCountsList = [0, 0, 0];
  const students = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  for (let i = 0; i < answers.length; i++) {
    students.forEach((student, index) => {
      if (student[i % student.length] === answers[i]) {
        getCorrectAnswerCountsList[index] += 1;
      }
    });
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
