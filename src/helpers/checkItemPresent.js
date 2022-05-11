export const checkItemPresent = (givenId, givenArray) => {
	const res = givenArray.find((item) => item.id === givenId);
	return res;
};
