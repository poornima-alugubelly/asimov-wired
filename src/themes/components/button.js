export const Button = {
	baseStyle: {
		fontWeight: "bold",
	},

	sizes: {
		xl: {
			h: "56px",
			fontSize: "lg",
			px: "32px",
		},
	},

	variants: {
		solid: (props) => ({
			bg: props.colorMode === "dark" ? "brand.400" : "light.400",
			color: props.colorMode === "dark" ? "brand.700" : "light.700",
			_hover: {
				bg: "brand.300",
				boxShadow: "0 0 2px 2px brand.50",
			},
		}),
	},
};
