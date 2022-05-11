import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	useDisclosure,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { UserHorizontalCard } from "..";
import { useColorToggler } from "../../hooks/useColorToggler";

export const UsersListModal = ({ usersList, setClose }) => {
	const { isOpen, onClose } = useDisclosure({ isOpen: true });
	const colorToggler = useColorToggler();
	console.log(usersList);
	return (
		<Modal
			isOpen={isOpen}
			onClose={() => {
				onClose;
				setClose(false);
			}}
		>
			<ModalOverlay />
			<ModalContent
				bg={colorToggler(700)}
				border="1px solid"
				borderColor={colorToggler(400)}
				pb="4"
			>
				<ModalHeader>Modal Title</ModalHeader>
				<ModalCloseButton
					bg="transparent"
					_focus={{
						boxShadow: "none",
					}}
				/>
				<ModalBody>
					<UserHorizontalCard usersList={usersList} />
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
