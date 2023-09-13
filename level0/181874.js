// solution 1
function solution1(myString) {
	let answer = "";

	for (let i = 0; i < myString.length; i++) {
		if (myString[i] === "a" || myString[i] === "A") {
			answer += "A";
		} else if (myString[i] === myString[i].toUpperCase()) {
			answer += myString[i].toLowerCase();
		} else {
			answer += myString[i];
		}
	}

	return answer;
}

// solution 2
function solution2(myString) {
	return [...myString].map((str) => (["a", "A"].includes(str) ? "A" : str.toLowerCase())).join("");
}
