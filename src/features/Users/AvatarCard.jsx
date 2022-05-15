import { Avatar, HStack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const AvatarCard = ({ username }) => {
	const { allUsers } = useSelector((state) => state.users);
	const foundUser = allUsers?.find((user) => user.username === username);
	return (
		<HStack spacing="2">
			<Avatar
				name={`${foundUser?.firstName} ${foundUser?.lastName}}`}
				src={foundUser?.avatarURL}
			/>
			<HStack spacing="1">
				<Text>{`${foundUser?.firstName} ${foundUser?.lastName}`}</Text>
				<Text color="gray">{`@${foundUser?.username}`}</Text>
			</HStack>
			;
		</HStack>
	);
};
