// solution 1
function solution(my_string) {
	let arrString = [...my_string];

	for (let i = 0; i < arrString.length; i++) {
		for (let j = i + 1; j < arrString.length; j++) {
			if (arrString[i] === arrString[j]) {
				arrString.splice(j, 1);
				j--;
			}
		}
	}

	return arrString.join("");
}

// solution 2
function solution(my_string) {
	return [...new Set(my_string)].join("");
}
