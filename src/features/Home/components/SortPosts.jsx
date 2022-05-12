import {
	Box,
	Button,
	Center,
	Flex,
	Text,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";
import { BiTrendingUp } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { useColorToggler } from "../../../hooks/useColorToggler";
import { useDispatch } from "react-redux";
import { sortByValue } from "../../../features";

export const SortPosts = () => {
	const colorToggler = useColorToggler();
	const dispatch = useDispatch();

	return (
		<Box mb="2">
			<Text mb="2" fontSize="xl">
				Sort By
			</Text>
			<Flex direction={"column"} justifyContent="flex-start" width="48" gap="4">
				<Button
					leftIcon={<BiTrendingUp />}
					onClick={() => dispatch(sortByValue("trending"))}
				>
					what's trending
				</Button>
				<Menu>
					<MenuButton as={Button} rightIcon={<BsChevronDown />}>
						<Text> Date Posted</Text>
					</MenuButton>
					<MenuList bgColor={colorToggler(800)}>
						<MenuItem
							onClick={() => dispatch(sortByValue("oldest"))}
							_hover={{ bgColor: colorToggler(900) }}
						>
							Oldest
						</MenuItem>
						<MenuItem
							onClick={() => dispatch(sortByValue("newest"))}
							_hover={{ bgColor: colorToggler(900) }}
						>
							Newest
						</MenuItem>
					</MenuList>
				</Menu>
			</Flex>
		</Box>
	);
};
