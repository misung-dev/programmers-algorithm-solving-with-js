function solution(str) {
	const newString = str.split(" ");

	for (let i = 0; i < newString.length; i++) {
		newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1).toLowerCase();
	}

	let answer = newString.join(" ");

	return answer;
}

console.log(solution("3people unFollowed me"));
