// solution1
function solution1(numbers) {
	const numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

	numArr.forEach((str, idx) => {
		numbers = numbers.replaceAll(str, idx);
	});
	return Number(numbers);
}

// solution2
function solution(numbers) {
	const numObj = {
		zero: 0,
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9,
	};

	const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
		return numObj[v];
	});

	return Number(num);
}

// 테스트 케이스
console.log(solution("onetwothreefourfivesixseveneightnine")); //123456789
console.log(solution("onefourzerosixseven")); //14067
