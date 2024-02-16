// solution1
function solution1(id_pw, db) {
	let result = "fail";
	const [id, pw] = id_pw;

	for (let i = 0; i < db.length; i++) {
		if (db[i][0] === id) {
			if (db[i][1] === pw) {
				result = "login";
			} else {
				result = "wrong pw";
			}
		}
	}
	return result;
}

// solution2
function solution(id_pw, db) {
	const [id, pw] = id_pw;
	const map = new Map(db);
	return map.has(id) ? (map.get(id) === pw ? "login" : "wrong pw") : "fail";
}

// 테스트 케이스
console.log(
	solution(
		["meosseugi", "1234"],
		[
			["rardss", "123"],
			["yyoom", "1234"],
			["meosseugi", "1234"],
		]
	)
); // "login"
console.log(
	solution(
		["programmer01", "15789"],
		[
			["programmer02", "111111"],
			["programmer00", "134"],
			["programmer01", "1145"],
		]
	)
); // "wrong pw"
console.log(
	solution(
		["rabbit04", "98761"],
		[
			["jaja11", "98761"],
			["krong0313", "29440"],
			["rabbit00", "111333"],
		]
	)
); // "fail"
