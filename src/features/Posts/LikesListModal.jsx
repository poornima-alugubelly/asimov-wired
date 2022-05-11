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
import { UserHorizontalCard, setOpenLikesList } from "..";
import { useColorToggler } from "../../hooks/useColorToggler";

export const LikesListModal = ({ usersList }) => {
	const { isOpen, onClose } = useDisclosure({ isOpen: true });
	const colorToggler = useColorToggler();
	const dispatch = useDispatch();
	console.log(usersList);
	return (
		<Modal
			isOpen={isOpen}
			onClose={() => {
				onClose;
				dispatch(
					setOpenLikesList({
						likesListState: false,
						likesListVal: [],
					})
				);
			}}
		>
			<ModalOverlay />
			<ModalContent
				bg={colorToggler(700)}
				border="1px solid"
				borderColor={colorToggler(400)}
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
