// [1차] 비밀지도

function solution(n, arr1, arr2) {
	let answer = [];

	for (let i = 0; i < n; i++) {
		// | (OR 연산자)를 사용하면 숫자를 이진수로 변환하지 않아도 내부적으로 각 숫자를 2진수 형태로 변환한 후 비트 단위로 OR 연산을 수행
		// 비트 연산의 결과를 시각적으로 보기 위해 2진수로 변환
		let binaryString = (arr1[i] | arr2[i]).toString(2);
		binaryString = binaryString.padStart(n, "0");
		let replacingString = binaryString.replace(/1/g, "#").replace(/0/g, " ");

		answer.push(replacingString);
	}

	return answer;
}

// 테스트 케이스
console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); // ["#####","# # #", "### #", "# ##", "#####"]
