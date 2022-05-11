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
} from "@chakra-ui/react";
import { NewPost } from "./NewPost";
import { useColorToggler } from "../../hooks/useColorToggler";

export const NewPostModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const colorToggler = useColorToggler();
	return (
		<>
			<Button onClick={onOpen} w="full">
				Post
			</Button>

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

					{/* <ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant="ghost">Secondary Action</Button>
					</ModalFooter> */}
				</ModalContent>
			</Modal>
		</>
	);
};
