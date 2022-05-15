export const flexSpaceBetween = {
	justifyContent: "space-between",
	width: "full",
};

export const flexCenter = {
	justify: "center",
	align: "center",
};

export const mainContainer = {
	maxW: ["100%", "90vw", "90vw", "90vw"],
	pt: "20",
	m: "auto",
	minH: "80vh",
};

export const mainGrid = {
	templateColumns: ["1fr", "1fr", "repeat(4,1fr)", "repeat(5, minmax(0,1fr))"],
	gap: ["0", "0", "4", "4"],
	minH: "80vh",
};

export const sideNavGrid = {
	colSpan: "1",
	display: ["none", "none", "block", "block"],
};
export const postsGridContainer = {
	colStart: ["1", "1", "2", "2"],
	colSpan: ["1", "3", "3", "3"],
	borderRight: "1px solid",
	borderLeft: "1px solid",
};
