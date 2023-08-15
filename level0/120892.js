function solution(cipher, code) {
	var answer = [];

	for (var i = code - 1; i < [...cipher].length; i += code) {
		answer.push([...cipher][i]);
	}

	return answer.join("");
}
