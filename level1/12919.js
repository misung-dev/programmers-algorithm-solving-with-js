// solution1
function solution1(seoul) {
	const index = seoul.indexOf("Kim");
	return `김서방은 ${index}에 있다`;
}

// solution2
function solution2(seoul) {
	const index = seoul.indexOf("Kim");
	return "김서방은 " + index + "에 있다";
}

// solution3
const solution3 = (seoul) => "김서방은 " + seoul.indexOf("Kim") + "에 있다";
