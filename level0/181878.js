// solution1
function solution1(myString, pat) {
	myString = myString.toLowerCase();
	pat = pat.toLowerCase();

	return myString.includes(pat) ? 1 : 0;
}

// solution2
function solution2(myString, pat) {
	return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}
