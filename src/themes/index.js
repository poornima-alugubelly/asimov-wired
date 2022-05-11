import { extendTheme } from "@chakra-ui/react";
import { Input, Button } from "./components";
import { mode } from "@chakra-ui/theme-tools";
import { styles } from "./styles";

// Global style overrides
const fonts = {
	heading: "Chakra Petch",
};

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

// const layerStyles = (props) => ({
// 	holoBg: {
// 		bg: mode("brand.700", "light.700")(props),
// 		border: "1px solid",
// 		borderColor: mode("brand.400", "light.400")(props),
// 	},
// });

const colors = {
	brand: {
		50: "rgb(119, 174, 206, 0.4)", // shadow color
		100: "rgb(197, 224, 228)", // secondary-color
		200: "rgb(0, 0, 0, 0.5)", // dark-blue
		300: "rgb(63, 239, 219)", // primary-light
		400: "rgb(1, 210, 237)", // primary-color
		500: "rgb(7, 70, 78)", // scroll-color
		600: "rgb(5, 88, 83)", // ternary-light
		700: "rgb(2, 46, 42)", // ternary-color
		800: "rgb(18, 18, 18)", // bg-color
		900: "rgb(30,30,30)", // black
	},
	red: "rgb(226, 22, 22)",
	green: "rgb(14, 201, 56)",
	gray: "rgb(121 137 139)",
	light: {
		50: "rgb(176, 196, 208, 0.4)",
		100: "rgb(24, 25, 25)",
		200: "rgb(0, 0, 0, 0.5)",
		300: "rgb(71, 130, 123)",
		400: "rgb(11, 104, 117)",
		500: "rgb(7, 70, 78)",
		600: "rgb(201, 214, 213)",
		700: "rgb(251, 254, 255)",
		800: "rgb(237, 237, 237)",
		900: "rgb(192,192,192)",
	},
};

const overrides = {
	fonts,
	colors,
	config,
	styles,
	components: { Button, Input },
};

export const theme = extendTheme(overrides);
