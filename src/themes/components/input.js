import { mode } from "@chakra-ui/theme-tools";

export const Input = {
	variants: {
		outline: (props) => ({
			field: {
				bg: mode("light.700", "brand.700")(props),
				color: mode("light.100", "brand.100")(props),
				borderColor: "brand.400",
				_focus: {
					bg: mode("light.600", "brand.600")(props),
				},
				_hover: {
					borderColor: "brand.300",
				},
			},
		}),
	},
};
