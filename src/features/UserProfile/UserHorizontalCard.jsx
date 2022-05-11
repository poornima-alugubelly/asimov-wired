import {
	UnorderedList,
	ListItem,
	Avatar,
	Box,
	Text,
	Button,
	Flex,
} from "@chakra-ui/react";

export const UserHorizontalCard = ({ usersList }) => {
	return (
		<UnorderedList spacing="4" pr="6">
			{usersList.map((user) => (
				<ListItem display={"flex"} gap="4" justify="center" key={user.username}>
					<Avatar
						name={`${user.firstName} ${user.lastName}`}
						src={user.avatarURL}
					/>
					<Flex
						gap="0"
						direction="row"
						h="min"
						justifyContent={"space-between"}
						w="full"
					>
						<Box>
							<Text>{`${user.firstName} ${user.lastName}`}</Text>
							<Text color="gray">{`${user.username}`}</Text>
						</Box>

						<Button size="xs" variant="outline">
							Follow
						</Button>
					</Flex>
				</ListItem>
			))}
		</UnorderedList>
	);
};
