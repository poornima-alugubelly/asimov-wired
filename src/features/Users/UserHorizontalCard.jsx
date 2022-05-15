import {
	UnorderedList,
	ListItem,
	Avatar,
	Box,
	Text,
	Button,
	Flex,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { checkUserPresent } from "../../helpers/checkUserPresent";

export const UserHorizontalCard = ({ usersList }) => {
	const { allUsers } = useSelector((state) => state.users);
	const usersToShow = usersList.filter((user) =>
		checkUserPresent(user.username, allUsers)
	);
	return (
		<UnorderedList spacing="4" pr="6">
			{usersToShow.map((user) => (
				<Link
					to={`/profile/${user.username}`}
					state={{ pageToShow: "profile" }}
					style={{ padding: "0.2rem" }}
					key={user.username}
				>
					<ListItem
						display={"flex"}
						gap="4"
						justify="center"
						key={user.username}
					>
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
								<Text color="gray">{`@${user.username}`}</Text>
							</Box>
						</Flex>
					</ListItem>
				</Link>
			))}
		</UnorderedList>
	);
};
