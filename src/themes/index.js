import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components/button";
// Global style overrides
const fonts = {
	heading: "Chakra Petch",
	body: "Rajdhani",
};

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

console.log(Button);

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
		900: "rgb(0, 0, 0, 0.8)", // black
	},
	red: "rgb(226, 22, 22)",
	green: "rgb(14, 201, 56)",
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
		900: "rgb(219, 230, 230),",
	},
};

const overrides = {
	fonts,
	colors,
	config,
	components: { Button },
};
console.log(overrides);

export const theme = extendTheme(overrides);
