function solution(rny_string) {
	return rny_string.replace(/m/g, "rn");
}

// 테스트 케이스
console.log(solution("masterpiece")); //"rnasterpiece"
