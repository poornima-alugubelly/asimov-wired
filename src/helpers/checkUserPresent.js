export const checkUserPresent = (givenUsername, givenArray) => {
	console.log(givenUsername, givenArray);
	const res = givenArray.find((item) => {
		return item.username === givenUsername;
	});

	return res;
};
