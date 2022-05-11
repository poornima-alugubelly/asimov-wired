import { Text, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkUserPresent } from "../../helpers/checkUserPresent";
import { useColorToggler } from "../../hooks/useColorToggler";
import { UserHorizontalCard } from "../UserProfile/UserHorizontalCard";
import { getAllUsers } from "./userSlice";

export const SuggestedProfiles = () => {
	const colorToggler = useColorToggler();
	const dispatch = useDispatch();
	const { allUsers } = useSelector((state) => state.users);
	const {
		user: { username, following },
	} = useSelector((state) => state.auth);

	useEffect(() => dispatch(getAllUsers()), [dispatch]);
	const suggestedUsers = allUsers
		.filter(
			(user) =>
				!checkUserPresent(user.username, following) &&
				username !== user.username
		)
		.slice(0, 5);
	return (
		<Box maxH="600" h="min" overflowY={"auto"}>
			<Text mb="2" fontSize="xl">
				Suggested Users
			</Text>
			<UserHorizontalCard usersList={suggestedUsers} />
		</Box>
	);
};
