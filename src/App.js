import { Heading, Text, Button, Box } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
export const App = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const bg = useColorModeValue("light.800", "brand.800");
	const color = useColorModeValue("light.400", "brand.400");
	return (
		<Box bg={bg} color={color} h="100vh">
			<Heading>This is heading</Heading> <Text>This is text</Text>{" "}
			<Button onClick={toggleColorMode}>Toggle</Button>
		</Box>
	);
};
