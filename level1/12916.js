function solution(s) {
	const lowerCaseS = s.toLowerCase();

	let pCount = 0;
	let yCount = 0;

	for (let i = 0; i < lowerCaseS.length; i++) {
		if (lowerCaseS[i] === "p") {
			pCount++;
		} else if (lowerCaseS[i] === "y") {
			yCount++;
		}
	}

	return pCount === yCount;
}
