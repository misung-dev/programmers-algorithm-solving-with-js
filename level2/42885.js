// 구명보트

function solution(people, limit) {
	let count = 0;

	let newPeople = people.sort((a, b) => b - a);

	let first = 0;
	let last = newPeople.length - 1;

	while (first <= last) {
		if (newPeople[first] + newPeople[last] <= limit) {
			last--;
		}
		first++;
		count++;
	}
	return count;
}

// 테스트 케이스
console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3
