export const Button = {
	baseStyle: {
		fontWeight: "bold",
		_focus: {
			boxShadow: "none",
		},
	},

	variants: {
		solid: (props) => ({
			bg: props.colorMode === "dark" ? "brand.400" : "light.400",
			color: props.colorMode === "dark" ? "brand.700" : "light.700",
			_hover: {
				bg: props.colorMode === "dark" ? "brand.300" : "light.300",
				boxShadow: "0 0 2px 2px brand.50",
			},
			_active: {
				bg: props.colorMode === "dark" ? "brand.300" : "light.300",
				boxShadow: "0 0 2px 2px brand.50",
			},
		}),
		outline: (props) => ({
			bg: props.colorMode === "dark" ? "brand.700" : "light.700",
			color: props.colorMode === "dark" ? "brand.400" : "light.400",
			border: "1px solid",
			borderColor: "brand.400",
			_hover: {
				bg: props.colorMode === "dark" ? "brand.400" : "light.400",
				color: props.colorMode === "dark" ? "brand.700" : "light.700",
			},
			_active: {
				bg: props.colorMode === "dark" ? "brand.400" : "light.400",
				color: props.colorMode === "dark" ? "brand.700" : "light.700",
			},
		}),
		iconButton: (props) => ({
			minW: "1.5rem",
			height: "2rem",
			color: props.colorMode === "dark" ? "brand.400" : "light.400",
			backgroundColor: "transparent",
			_hover: {
				backgroundColor: "transparent",
			},
		}),
	},
};
