import {
	VStack,
	Text,
	UnorderedList,
	ListItem,
	Avatar,
	Flex,
	Box,
	Center,
} from "@chakra-ui/react";
import { useColorToggler } from "../../hooks/useColorToggler";
export const SuggestedProfiles = () => {
	const colorToggler = useColorToggler();
	return (
		<Box
			maxH="400"
			h="min"
			border="1px solid"
			borderColor={colorToggler(600)}
			position="fixed"
			maxW="64"
			m="2"
			mt="4"
			pb="4"
			pt="2"
			overflowY={"auto"}
		>
			<Center mb="2">Suggested Users</Center>

			<UnorderedList spacing="4" pr="6" pl="2">
				{[1, 2, 3, 4, 5].map(() => (
					<ListItem display={"flex"} gap="4" justify="center" grow="0">
						<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
						<Flex gap="0" direction="column" h="min">
							<Text>Profile</Text>
							<Text color="gray">@username</Text>
						</Flex>
					</ListItem>
				))}
			</UnorderedList>
		</Box>
	);
};
