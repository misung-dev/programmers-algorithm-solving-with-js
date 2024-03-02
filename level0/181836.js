function solution(picture, k) {
	const enlargedPicture = [];

	function enlargePixel(pixel, k) {
		let enlarged = "";
		for (let i = 0; i < pixel.length; i++) {
			enlarged += pixel[i].repeat(k);
		}
		return enlarged;
	}

	picture.forEach((row) => {
		for (let i = 0; i < k; i++) {
			enlargedPicture.push(enlargePixel(row, k));
		}
	});

	return enlargedPicture;
}
