// 모의고사

function solution1(answers) {
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

function solution(answers) {
  // 학생 1~3의 맞은 갯수 카운트
  let correctScore = [0, 0, 0];

  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === student1[i % 5]) {
      correctScore[0]++;
    }
    if (answers[i] === student2[i % 8]) {
      correctScore[1]++;
    }
    if (answers[i] === student3[i % 10]) {
      correctScore[2]++;
    }
  }

  // 제일 많이 맞춘 갯수
  const maxScore = Math.max(...correctScore);

  // 제일 많이 맞춘 학생 (동점자 포함)
  const result = [];

  for (let i = 0; i < correctScore.length; i++) {
    if (correctScore[i] == maxScore) {
      result.push(i + 1);
    }
  }

  return result;
}

// 테스트 케이스
console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]
