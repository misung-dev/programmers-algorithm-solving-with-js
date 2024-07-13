function solution(spell, dic) {
	for (let i = 0; i < dic.length; i++) {
		let allIncluded = true;

		for (let j = 0; j < spell.length; j++) {
			if (!dic[i].includes(spell[j])) {
				allIncluded = false;
				break;
			}
		}
		if (allIncluded) {
			return 1;
		}
	}

	return 2;
}

// 테스트 케이스
console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])); // 2
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])); // 1
console.log(solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])); // 2
