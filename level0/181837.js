// solution1
function solution1(order) {
	let total = 0;

	for (let i = 0; i < order.length; i++) {
		if (order[i].includes("cafelatte")) {
			total += 5000;
		} else {
			total += 4500;
		}
	}
	return total;
}

// solution2
const solution = (order) =>
	order.reduce((acc, cur) => acc + (cur.includes("latte") ? 5000 : 4500), 0);

// 테스트 케이스
console.log(solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])); // 19000
console.log(solution(["americanoice", "americano", "iceamericano"])); // 13500
