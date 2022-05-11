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
	MenuItemOption,
	MenuGroup,
	MenuOptionGroup,
	MenuDivider,
	Icon,
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { BiTrendingUp } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
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
					{" "}
					what's trending
				</Button>
				<Menu>
					<MenuButton as={Button} rightIcon={<BsChevronDown />}>
						<Text> Date Posted</Text>
					</MenuButton>
					<MenuList bgColor={colorToggler(900)}>
						<MenuItem onClick={() => dispatch(sortByValue(""))}>
							Default
						</MenuItem>
						<MenuItem onClick={() => dispatch(sortByValue("oldest"))}>
							Oldest
						</MenuItem>
						<MenuItem onClick={() => dispatch(sortByValue("newest"))}>
							Newest
						</MenuItem>
					</MenuList>
				</Menu>
			</Flex>
		</Box>
	);
};
