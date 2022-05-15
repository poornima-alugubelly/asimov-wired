import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Box,
	Icon,
	Text,
	FormControl,
	FormLabel,
	Input,
	Avatar,
	AvatarBadge,
	VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { toast } from "react-toastify";
import { BsFillCameraFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useColorToggler } from "../../hooks/useColorToggler";
import { updateUser, useProfile } from "..";

export const EditProfileForm = () => {
	const dispatch = useDispatch();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const colorToggler = useColorToggler();
	const { userToDisplay } = useProfile();
	const { username, firstName, lastName, bio, portfolio, avatarURL } =
		userToDisplay;
	const { token } = useSelector((state) => state.auth);
	const [formVal, setFormVal] = useState({ ...userToDisplay });
	const uploadImage = async (image) => {
		if (Math.round(image.size / 1024000) > 2)
			toast.error("File size should be less than 2MB");
		else {
			// reason to use formData here ,
			// When you make a POST request, you have to encode the data that forms the body of the request in some way.
			// we should use multipart/form-data (a type of encoding ) when  form includes any <input type="file"> elements
			// formData can do this encoding
			const data = new FormData();
			data.append("file", image);
			data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_API_KEY);
			const requestOptions = {
				method: "POST",
				body: data,
			};
			await fetch(
				"https://api.cloudinary.com/v1_1/dodkrr6ce/image/upload",
				requestOptions
			)
				.then((response) => response.json())
				.then((json) => {
					setFormVal((prev) => ({ ...prev, avatarURL: json.url }));
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};
	const updateHandler = () => {
		dispatch(updateUser({ formVal, token }));
		toast.success("Profile updated!");
	};
	return (
		<Box>
			<Button onClick={onOpen} variant="outline">
				Edit Profile
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent
					bg={colorToggler(700)}
					border="1px solid"
					borderColor={colorToggler(400)}
				>
					<ModalHeader>Your Details</ModalHeader>
					<ModalCloseButton
						bg="transparent"
						_focus={{
							boxShadow: "none",
						}}
					/>
					<ModalBody>
						<VStack spacing="4">
							<FormControl>
								<Text>Avatar</Text>

								<Avatar
									src={formVal.avatarURL}
									alt="profile-image"
									size="md"
									marginRight="2"
									name={`${firstName} ${lastName}`}
								>
									<AvatarBadge boxSize="1.5em" border="0">
										<FormControl>
											<FormLabel
												cursor="pointer"
												position="absolute"
												right="-10px"
												bottom="0"
											>
												<Icon as={BsFillCameraFill} />
											</FormLabel>
											<Input
												type="file"
												visibility="hidden"
												accept="image/*"
												onChange={(e) => uploadImage(e.target.files[0])}
											/>
										</FormControl>
									</AvatarBadge>
								</Avatar>
							</FormControl>
							<FormControl>
								<FormLabel>Username:</FormLabel>
								<Input variant="unstyled" isReadOnly value={username} />
							</FormControl>
							<FormControl>
								<FormLabel>Name:</FormLabel>
								<Input
									value={`${firstName} ${lastName}`}
									variant="unstyled"
									isReadOnly
								/>
							</FormControl>

							<FormControl>
								<FormLabel>Bio:</FormLabel>
								<Input
									value={formVal.bio}
									onChange={(e) =>
										setFormVal((prev) => ({ ...prev, bio: e.target.value }))
									}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Website:</FormLabel>
								<Input
									value={formVal.portfolio}
									onChange={(e) =>
										setFormVal((prev) => ({
											...prev,
											portfolio: e.target.value,
										}))
									}
								/>
							</FormControl>
						</VStack>
					</ModalBody>

					<ModalFooter>
						<Button
							mr={3}
							onClick={() => {
								onClose();
								updateHandler();
							}}
						>
							Update
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};
