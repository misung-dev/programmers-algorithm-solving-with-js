function solution(str) {
	const numArr = str.split(" ").map(Number); // 문자열을 순자 배열로 변환

	const minNum = Math.min(...numArr);
	const maxNum = Math.max(...numArr);

	return `${minNum} ${maxNum}`;
}

// 테스트
console.log(solution("1 2 3 4"));

// 참고
// 'Math.min'과 'Math.max' 함수는 배열 전체로 인자로 받는 것이 아니라,
// 여러 개의 인자를 각각 전달받아 그 중에서 최소값과 최대값을 찾는 것이다
// 따라서 numArr 배열 전체를 넣는 대신 스프레드 연산자 ('...')를 사용하여 배열의 각 요소를 개별적인 인자로 전달해야한다.
