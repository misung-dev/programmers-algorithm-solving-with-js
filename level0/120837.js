// solution 1
function solution(hp) {
	var ant = 0;

	if (hp >= 5) {
		ant += Math.floor(hp / 5);
		hp = hp % 5;
	}

	if (hp >= 3) {
		ant += Math.floor(hp / 3);
		hp = hp % 3;
	}

	ant += hp;

	return ant;
}

// solution 2
function solution(hp) {
	return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}

// solution 3
function solution(hp) {
	const 장군개미 = Math.floor(hp / 5);
	const 병정개미 = Math.floor((hp - 장군개미 * 5) / 3);
	const 일개미 = hp - (장군개미 * 5 + 병정개미 * 3);
	return 장군개미 + 병정개미 + 일개미;
}
