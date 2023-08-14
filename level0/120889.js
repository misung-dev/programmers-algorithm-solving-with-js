// solution 1
function solution(sides) {
	var newSides = sides.sort((a, b) => a - b);

	if (newSides[0] + newSides[1] > newSides[2]) {
		return 1;
	} else {
		return 2;
	}
}

// solution 2
function solution(sides) {
	sides = sides.sort((a, b) => a - b);
	return sides[0] + sides[1] > sides[2] ? 1 : 2;
}
