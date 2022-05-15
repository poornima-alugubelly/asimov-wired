import { Text, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUserPresent } from "../../helpers/checkUserPresent";
import { useColorToggler } from "../../hooks/useColorToggler";
import { UserHorizontalCard } from "./UserHorizontalCard";
import { getAllUsers } from "./usersSlice";

export const SuggestedProfiles = () => {
	const dispatch = useDispatch();
	const { allUsers } = useSelector((state) => state.users);
	const {
		user: { username },
	} = useSelector((state) => state.auth);
	const currUser = allUsers.find((user) => user.username === username);
	console.log(currUser);
	useEffect(() => dispatch(getAllUsers()), [dispatch]);
	const suggestedUsers = allUsers
		.filter(
			(user) =>
				!checkUserPresent(user.username, currUser?.following) &&
				username !== user.username
		)
		.slice(0, 3);
	console.log(suggestedUsers);
	return (
		<Box maxH="600" h="min" overflowY={"auto"}>
			<Text mb="2" fontSize="xl">
				Suggested Users
			</Text>
			<UserHorizontalCard usersList={suggestedUsers} />
		</Box>
	);
};
