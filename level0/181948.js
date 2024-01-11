const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on("close", function () {
	console.log(`!@#$%^&*(\\'"<>?:;`);
});

// 테스트 케이스 (이 문제는 입력이 없음)
// !@#$%^&*(\'"<>?:;
