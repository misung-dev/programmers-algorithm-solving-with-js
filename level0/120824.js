function solution(num_list) {
	var num1 = 0;
	var num2 = 0;

	for (var i = 0; i < num_list.length; i++) {
		if (num_list[i] % 2 == 0) {
			num1 += 1;
		} else {
			num2 += 1;
		}
	}
	return [num1, num2];
}

// function solution(num_list) {
//     var answer = [0,0];
//     for(let a of num_list){
//         answer[a%2] += 1
//     }
//     return answer;
// }

// function solution(num_list) {
//   return [
//     num_list.filter((num) => num % 2 === 0).length,
//     num_list.filter((num) => num % 2 === 1).length,
//   ];
// }
