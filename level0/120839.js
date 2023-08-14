// solution 1
function solution(rsp) {
	rspArr = [...rsp];
	var newArr = [];

	for (var i = 0; i < rspArr.length; i++) {
		if (rspArr[i] == 2) {
			newArr.push("0");
		} else if (rspArr[i] == 0) {
			newArr.push("5");
		} else if (rspArr[i] == 5) {
			newArr.push("2");
		}
	}
	return newArr.join("");
}

// solution 2
function solution(rsp) {
	let arr = {
		2: 0,
		0: 5,
		5: 2,
	};
	var answer = [...rsp].map((v) => arr[v]).join("");
	return answer;
}

// solution 3
function solution(rsp) {
	return rsp
		.split("")
		.map((v) => (v === "2" ? 0 : v === "0" ? 5 : 2))
		.join("");
}
