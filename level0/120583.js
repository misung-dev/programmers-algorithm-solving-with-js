function solution(array, n) {
	var result = 0;

	for (var i = 0; i < array.length; i++) {
		if (n === array[i]) {
			result += 1;
		}
	}
	return result;
}

// function solution(array, n) {
//   var answer = 0;
//   let Array = array.filter((item) => item === n)
//   answer = Array.length

//   return answer;
// }
