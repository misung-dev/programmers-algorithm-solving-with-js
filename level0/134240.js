// 푸드 파이트 대회

function solution(food) {
	let leftNum = "";

	for (let i = 1; i < food.length; i++) {
		let count = Math.floor(food[i] / 2);

		leftNum += i.toString().repeat(count);
	}

	const rightNum = leftNum.split("").reverse().join("");

	return leftNum + "0" + rightNum;
}

// 테스트 케이스
console.log(solution([1, 3, 4, 6])); // "1223330333221"
console.log(solution([1, 7, 1, 2])); // "111303111"
