// 할인 행사

function solution(want, number, discount) {
	let days = 0;
	let totalWantOriginalList = [];

	// 원하는 품목을 수량에 맞게 열거
	for (let i = 0; i < number.length; i++) {
		for (let j = 1; j <= number[i]; j++) {
			totalWantOriginalList.push(want[i]);
		}
	}

	// 총 구매 수량 파악
	const totalCount = totalWantOriginalList.length;

	for (let i = 0; i <= discount.length - totalCount; i++) {
		let discountProduct = discount.slice(i, totalCount + i); // 연속 몇일간 할인하는 상품 리스트
		let totalWantList = [...totalWantOriginalList]; // 원본 배열 보존을 위한 얕은 복사

		// 할인 상품들을 매일 구매 가능한지 체크 -> 구매 가능하다면 totalWantList에서 상품 삭제
		for (let product of discountProduct) {
			if (totalWantList.includes(product)) {
				const loc = totalWantList.indexOf(product);
				totalWantList.splice(loc, 1);
			} else {
				break;
			}

			// 배열이 비워지면 원하는 상품을 연속해서 살 수 있는 날로 간주
			if (totalWantList.length === 0) {
				days++;
			}
		}
	}

	return days;
}

// 테스트 케이스
console.log(
	solution(
		["banana", "apple", "rice", "pork", "pot"],
		[3, 2, 2, 2, 1],
		[
			"chicken",
			"apple",
			"apple",
			"banana",
			"rice",
			"apple",
			"pork",
			"banana",
			"pork",
			"rice",
			"pot",
			"banana",
			"apple",
			"banana",
		]
	)
); // 3
console.log(
	solution(
		["apple"],
		[10],
		[
			"banana",
			"banana",
			"banana",
			"banana",
			"banana",
			"banana",
			"banana",
			"banana",
			"banana",
			"banana",
		]
	)
); //0
