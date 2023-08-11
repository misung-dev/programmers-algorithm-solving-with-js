function solution(numbers, num1, num2) {
	var answer = [];
	for (var i = num1; i <= num2; i++) {
		answer.push(numbers[i]);
	}
	return answer;
}

// function solution(numbers, num1, num2) {
//   return numbers.splice(num1, num2-num1+1);
// }
