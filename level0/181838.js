// solution1
const solution = (date1, date2) => (new Date(date1) < new Date(date2) ? 1 : 0);

// solution2
function solution2(date1, date2) {
	const [year1, month1, day1] = date1;
	const [year2, month2, day2] = date2;

	if (year1 < year2) {
		return 1;
	} else if (year1 > year2) {
		return 0;
	} else {
		// 연도가 같은 경우 월을 비교
		if (month1 < month2) {
			return 1;
		} else if (month1 > month2) {
			return 0;
		} else {
			// 연도와 월이 같은 경우 일을 비교
			if (day1 < day2) {
				return 1;
			} else if (day1 > day2) {
				return 0;
			} else {
				// 연도, 월, 일이 모두 같은 경우
				return 0;
			}
		}
	}
}

// 테스트 케이스
console.log(solution([2021, 12, 28], [2021, 12, 29])); // 1
console.log(solution([1024, 10, 24], [1024, 10, 24])); // 0
