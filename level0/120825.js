// function solution(my_string, n) {
// 	var newString = "";

// 	for (var i = 0; i < my_string.length; i++) {
// 		newString += my_string[i].repeat(n);
// 	}
// 	return newString;
// }

function solution(my_string, n) {
	return [...my_string].map((v) => v.repeat(n)).join("");
}
