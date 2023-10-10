function solution(string) {
	const mid = Math.floor(string.length / 2);
	return string.length % 2 === 1 ? string.charAt(mid) : string.slice(mid - 1, mid + 1);
}
