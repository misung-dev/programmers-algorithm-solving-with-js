function solution(array, height) {
	var result = 0;

	for (i = 0; i < array.length; i++) {
		if (height < array[i]) {
			result += 1;
		}
	}
	return result;
}

// function solution(array, height) {
//   var answer = array.filter(item => item > height);
//   return answer.length;
// }
