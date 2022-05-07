import { useColorMode } from "@chakra-ui/react";

export const useColorToggler = () => {
	const { colorMode } = useColorMode();

	const colorToggler = (colorVal) =>
		colorMode === "dark" ? `brand.${colorVal}` : `light.${colorVal}`;
	return colorToggler;
};
