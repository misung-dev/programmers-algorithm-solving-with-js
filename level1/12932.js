// solution1
function solution1(num) {
	const newNum = num.toString().split("").map(Number);
	return newNum.reverse();
}
// map(Number)는 정확한 숫자 배열을 얻기 위한 필수적인 단계
// 만약 숫자로 변환하지 않으면 배열 요소가 문자열로 남아있어 숫자 비교가 원활하지 않을 수 있다.
// 예를 들어, 25와 3을 비교할때, 문자열 비교라면 25가 더 크고, 숫자로 변환해서 비교하면 25가 더 작게 나온다.

//  solution2
function solution(n) {
	return String(n)
		.split("")
		.map((str) => Number(str))
		.reverse();
}
