import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	IconButton,
} from "@chakra-ui/react";
import { NewPost } from "./NewPost";
import { useColorToggler } from "../../hooks/useColorToggler";
import { BsPencilSquare } from "react-icons/bs";

export const NewPostModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const colorToggler = useColorToggler();
	return (
		<>
			<Button
				onClick={onOpen}
				w="full"
				display={["none", "none", "block", "block"]}
			>
				Post
			</Button>
			<IconButton
				onClick={onOpen}
				icon={<BsPencilSquare />}
				display={["block", "block", "none", "none"]}
				variant="iconButton"
				fontSize="xl"
			></IconButton>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent
					bg={colorToggler(700)}
					border="1px solid"
					borderColor={colorToggler(400)}
				>
					<ModalHeader>What's on your mind?</ModalHeader>
					<ModalCloseButton
						bg="transparent"
						_focus={{
							boxShadow: "none",
						}}
					/>
					<ModalBody>
						<NewPost close={onClose} />
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
