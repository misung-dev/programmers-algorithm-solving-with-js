// solution 1
function solution(my_string) {
	return [...my_string].filter((char) => !"aeiou".includes(char)).join("");
}

// solution 2
function solution(my_string) {
	return my_string.replace(/[aeiou]/g, "");
}
