import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
	Text,
	Center,
	Box,
	Flex,
	Button,
	VStack,
} from "@chakra-ui/react";
import { useColorToggler } from "../../hooks/useColorToggler";

export const Login = () => {
	const colorToggler = useColorToggler();

	return (
		<Flex
			align="center"
			justify="center"
			margin="auto"
			h="full"
			w="full"
			layerStyle="holoBg"
		>
			<Box
				h="max"
				w="max"
				border="1px solid"
				borderColor={colorToggler(400)}
				p="8"
			>
				<Center>
					<Text fontSize="2xl" pb="4">
						LOGIN
					</Text>
				</Center>
				<VStack spacing="4">
					<FormControl isRequired>
						<FormLabel htmlFor="email" isRequired mb="0">
							Email address
						</FormLabel>
						<Input id="email" type="email" />
					</FormControl>
					<FormControl isRequired>
						<FormLabel htmlFor="email" mb="0">
							Password
						</FormLabel>
						<Input id="email" type="password" />
					</FormControl>
					<Button w="full">Login</Button>
					<Button w="full" variant={"outline"}>
						Login as guest
					</Button>
				</VStack>
			</Box>
		</Flex>
	);
};
