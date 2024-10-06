// N개의 최소공배수

// 최대공약수
const gcd = (a, b) => {
	while (b > 0) {
		temp = b;
		b = a % b;
		a = temp;
	}
	return a;
};

// 최소공배수
const lcm = (a, b) => {
	return (a * b) / gcd(a, b);
};

function solution(arr) {
	let total = 1;

	for (let i = 0; i < arr.length; i++) {
		total = lcm(total, arr[i]);
	}
	return total;
}

// 테스트 케이스
console.log(solution([2, 6, 8, 14])); // 168
console.log(solution([1, 2, 3])); // 6

// 유클리드 호제법?
// 최대공약수를 구하는 알고리즘 중 하나
// 호제법? 말은 두 수가 서로 상대방 수를 나누어서 결국 원하는 수를 얻는 알고리즘
// 2개의 자연수(또는 정식) a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면(단, a>b), a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
// 이 성질에 따라, b를 r로 나눈 나머지 r'를 구하고, 다시 r을 r'로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 나누는 수가 a와 b의 최대공약수이다.
// 이는 명시적으로 기술된 가장 오래된 알고리즘으로서도 알려져 있으며, 기원전 300년경에 쓰인 유클리드의 《원론》 제7권, 명제 1부터 3까지에 해당한다.
