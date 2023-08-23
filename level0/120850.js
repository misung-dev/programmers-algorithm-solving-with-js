// solution 1
function solution(my_string) {
	let num = my_string.replace(/[^0-9]/g, "");
	let sortedNums = [...num].map(Number).sort(function (a, b) {
		return a - b;
	});
	return sortedNums;
}
