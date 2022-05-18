import {
	Box,
	Text,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { UserHorizontalCard } from "..";
import { useColorToggler } from "../../hooks/useColorToggler";
import { useState } from "react";
import { getSearchedUsers } from "../../helpers/getSearchedUsers";

export const Search = () => {
	const { allUsers } = useSelector((state) => state.users);
	const { pathname } = useLocation();
	const colorToggler = useColorToggler();
	const [searchText, setSearchText] = useState("");
	const [searchedUsers, setSearchedUsers] = useState([]);
	const timerId = useRef();

	useEffect(() => {
		clearTimeout(timerId.current);
		timerId.current = setTimeout(() => {
			setSearchedUsers(getSearchedUsers(allUsers, searchText));
			console.log("called");
		}, 1000);
		return () => clearTimeout(timerId.current);
	}, [searchText]);

	useEffect(() => {
		setSearchText("");
	}, [pathname]);
	return (
		<Box w={[40, "xs", "sm", "md"]}>
			<InputGroup w="100%" m="2" position="relative">
				<Input
					placeholder="enter username"
					value={searchText}
					onChange={(e) => setSearchText(e.target.value.trim())}
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
			{searchText.length !== 0 && (
				<Box
					position={"absolute"}
					bg={colorToggler(800)}
					border="1px solid"
					borderColor={colorToggler(900)}
					boxShadow=" rgba(60,60,60, 0.35) 0px 3px 8px;"
				>
					<UserHorizontalCard usersList={searchedUsers} />
				</Box>
			)}
		</Box>
	);
};
