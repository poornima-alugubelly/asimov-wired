import {
	Image,
	Box,
	Avatar,
	Stack,
	HStack,
	Flex,
	Button,
	Text,
	IconButton,
	Link,
	Icon,
} from "@chakra-ui/react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsLink45Deg } from "react-icons/bs";
import { flexSpaceBetween, flexCenter } from "../../styles";
import { useColorToggler } from "../../hooks/useColorToggler";

export const ProfileDetails = () => {
	return (
		<Stack spacing="4" w="90%" direction={["column", "row"]} py="4">
			<Avatar
				name="Oshigaki Kisame"
				src="https://bit.ly/dan-abramov"
				size="2xl"
			/>
			<Box>
				<Flex {...flexSpaceBetween}>
					<Box>
						<Text fontSize="2xl">Admin</Text>
						<Text color="gray">@username</Text>
					</Box>
					<Box>
						<HStack>
							<Button variant="outline">Edit Profile</Button>
							<IconButton
								icon={<RiLogoutCircleRLine />}
								fontSize="2xl"
								color="gray"
								variant="iconButton"
							/>
						</HStack>
					</Box>
				</Flex>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nisi.
				</Text>
				<Flex justifyContent="space-between">
					<Text>10 Posts</Text>
					<Text>5 followers</Text>
					<Text>15 following</Text>
				</Flex>
				<Flex align="center">
					<Icon as={BsLink45Deg} />
					<Link href="#">links can live inline with text</Link>
				</Flex>
			</Box>
		</Stack>
	);
};
