import {
	Flex,
	HStack,
	Avatar,
	Text,
	Box,
	Image,
	VStack,
	IconButton,
} from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useColorToggler } from "../../hooks/useColorToggler";

export const PostCard = () => {
	const colorToggler = useColorToggler();

	return (
		<VStack w="90%" align="start" spacing="4" paddingTop={4} paddingBottom={4}>
			<HStack spacing="3">
				<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
				<Box>
					<Text>Some fancy cringey name</Text>
					<Text color="gray">@username</Text>
				</Box>
			</HStack>
			<Text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
				quis fugit autem non aut temporibus eos neque rerum voluptate beatae
				obcaecati tenetur error culpa odio illo, est nostrum laboriosam quos
				debitis nobis tempora. Libero ad pariatur veniam perspiciatis obcaecati
				minus tempore sit aut dolores accusantium. Molestias tempora labore esse
				nisi.`
			</Text>
			<Box w="full">
				<Image
					src="https://bit.ly/dan-abramov"
					alt="Dan Abramov"
					w="80%"
					borderRadius="30"
				/>
			</Box>
			<Box>
				<IconButton
					icon={<AiFillHeart className="icon-btn" />}
					variant="iconButton"
				/>
				<Text color={colorToggler(400)}>Liked by x people</Text>
			</Box>
		</VStack>
	);
};
