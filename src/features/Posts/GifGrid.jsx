import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Grid,
	GridItem,
	Icon,
	useDisclosure,
	Button,
	Image,
	Spinner,
	Box,
	Input,
	InputGroup,
	InputRightElement,
	Center,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineGif, AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useColorToggler } from "../../hooks/useColorToggler";
import { gifClicked } from "./postSlice";

export const GifGrid = ({ imageSelected }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [images, setImages] = useState();
	const [searchText, setSearchText] = useState("");
	const [searchStarted, setSearchStarted] = useState(false);
	const dispatch = useDispatch();
	const colorToggler = useColorToggler();
	const [gifsLoading, setGifsLoading] = useState(false);

	const getTrendingGif = () => {
		const key = process.env.REACT_APP_GIPHY_KEY;
		let url = `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=6`;
		fetch(url)
			.then((response) => response.json())
			.then((content) => {
				setImages(content.data.map((gif) => gif.images.downsized));
			})
			.catch((err) => {
				console.error(err);
			});
	};

	useEffect(() => {
		getTrendingGif();
	}, [isOpen]);

	const getGif = () => {
		const key = process.env.REACT_APP_GIPHY_KEY;
		let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&limit=6&q=${searchText}`;
		setTimeout(() => dispatch(setGifsLoading(true)), 100);
		fetch(url)
			.then((response) => response.json())
			.then((content) => {
				if (searchStarted)
					setImages(content.data.map((gif) => gif.images.downsized));
				setGifsLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setGifsLoading(false);
			});
	};
	useEffect(() => {
		getGif();
	}, [searchText]);

	return (
		<>
			{imageSelected ? (
				<Icon
					as={AiOutlineGif}
					fontSize={"25"}
					onClick={onOpen}
					color="gray"
					cursor="not-allowed"
				/>
			) : (
				<Icon
					as={AiOutlineGif}
					fontSize={"25"}
					onClick={onOpen}
					cursor="pointer"
				/>
			)}
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent
					bg={colorToggler(700)}
					border="1px solid"
					borderColor={colorToggler(400)}
				>
					<ModalHeader>Add a gif...</ModalHeader>
					<ModalCloseButton
						bg="transparent"
						_focus={{
							boxShadow: "none",
						}}
					/>
					<ModalBody>
						<Box w={[40, "xs", "xs", "xs"]} m="auto">
							<InputGroup w="100%" m="2" position="relative">
								<Input
									placeholder="enter username"
									value={searchText}
									onChange={(e) => {
										setSearchText(e.target.value);
										if (e.target.value === "") {
											setSearchStarted(false);
										} else {
											setSearchStarted(true);
										}
									}}
								></Input>
								<InputRightElement
									as="button"
									children={
										searchText.length ? (
											<AiOutlineClose onClick={() => setSearchText("")} />
										) : (
											<BsSearch />
										)
									}
								></InputRightElement>
							</InputGroup>
						</Box>
						{gifsLoading ? (
							<Center>
								<Spinner />
							</Center>
						) : (
							<Grid
								h={"fitContent"}
								templateRows="repeat(3, 1fr)"
								templateColumns="repeat(2, 1fr)"
								gap={4}
							>
								{images?.map((gif, index) => (
									<GridItem
										key={index}
										w="150"
										h="150"
										onClick={() => dispatch(gifClicked(gif.url))}
									>
										{console.log(gif)}
										<Image src={gif.url} w="100%" h="100%" />
									</GridItem>
								))}
							</Grid>
						)}
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme="blue"
							mr={3}
							onClick={() => {
								onClose();
								setSearchText("");
							}}
						>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
