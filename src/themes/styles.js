import { mode } from "@chakra-ui/theme-tools";
export const styles = {
	global: (props) => ({
		body: {
			fontFamily: "Rajdhani",
			color: mode("light.100", "brand.100")(props),
			bg: mode("light.800", "brand.800")(props),
			lineHeight: "base",
		},
	}),
};
