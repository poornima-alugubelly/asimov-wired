export const flexSpaceBetween = {
	justifyContent: "space-between",
	width: "full",
};

export const flexCenter = {
	justify: "center",
	align: "center",
};

export const mainContainer = {
	maxW: "90vw",
	pt: "20",
	pb: "20",
	m: "auto",
};

export const mainGrid = {
	templateColumns: ["1fr", "1fr", "repeat(4,1fr)", "repeat(5, minmax(0,1fr))"],
	gap: "4",
	h: "full",
};

export const sideNavGrid = {
	colSpan: "1",
	display: ["none", "none", "block", "block"],
};
export const postsGridContainer = {
	colStart: "2",
	colSpan: "3",
	borderRight: "1px solid",
	borderLeft: "1px solid",
};
