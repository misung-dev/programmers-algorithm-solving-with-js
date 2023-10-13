// solution1
function solution(string) {
	return string.length === 4 || string.length === 6 ? !isNaN(string) : false;
}

// solution2
function solution(string) {
	if (string.length === 4 || string.length === 6) {
		for (let i = 0; i < string.length; i++) {
			if (isNaN(string[i])) {
				return false; // 숫자가 아닌 문자가 포함된 경우 false를 반환
			}
		}
		return true; // 모든 문자가 숫자인 경우에만 true를 반환
	}
	return false; // 길이가 4 또는 6이 아닌 경우 false를 반환
}
