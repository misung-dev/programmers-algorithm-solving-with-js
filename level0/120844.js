// solution 1
function solution(numbers, direction) {
	var answer = [];

	if (direction === "right") {
		answer.push(numbers[numbers.length - 1]);
		for (var i = 0; i < numbers.length - 1; i++) {
			answer.push(numbers[i]);
		}
	} else {
		for (var i = 1; i < numbers.length; i++) {
			answer.push(numbers[i]);
		}
		answer.push(numbers[0]);
	}
	return answer;
}

// solution 2
function solution(numbers, direction) {
	direction === "right" ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
	return numbers;
}

// 배열에 값을 추가하는 함수
// .push() : 배열의 맨 끝에 값을 추가한다.
// .unshift() : 배열의 맨 앞에 값을 추가한다.

// 배열에 값을 제거하는 함수
// .pop() : 배열의 맨 끝에 값을 제거한다.
// .shift() : 배열의 맨 앞에 값을 제거한다.
