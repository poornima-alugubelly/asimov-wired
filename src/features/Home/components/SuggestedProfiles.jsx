import {
	VStack,
	Text,
	UnorderedList,
	ListItem,
	Avatar,
	Flex,
	Box,
	Center,
	Button,
} from "@chakra-ui/react";
import { useColorToggler } from "../../../hooks/useColorToggler";

export const SuggestedProfiles = () => {
	const colorToggler = useColorToggler();
	return (
		<Box maxH="600" h="min" overflowY={"auto"}>
			<Text mb="2" fontSize="xl">
				Suggested Users
			</Text>
			<UnorderedList spacing="4" pr="6">
				{[1, 2, 3, 4, 5].map(() => (
					<ListItem display={"flex"} gap="4" justify="center" grow="0">
						<Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
						<Flex gap="0" direction="row" h="min" align="space-between">
							<Box>
								<Text>Profile</Text>
								<Text color="gray">@username</Text>
							</Box>

							<Button size="xs" variant="outline">
								Follow
							</Button>
						</Flex>
					</ListItem>
				))}
			</UnorderedList>
		</Box>
	);
};
