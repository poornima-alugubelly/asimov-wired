export const checkItemPresent = (givenId, givenArray) => {
	console.log(givenId, givenArray);
	const res = givenArray.find((item) => item.id === givenId);
	return res;
};
