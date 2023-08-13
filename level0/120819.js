// function solution(money) {
// 	var answer = [];

// 	var a = Math.floor(money / 5500);
// 	var b = money - 5500 * a;
// 	return [a, b];
// }

function solution(money) {
	return [Math.floor(money / 5500), money % 5500];
}
