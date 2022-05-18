import { Button, Flex, Select } from "@chakra-ui/react";
import { BiTrendingUp } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useColorToggler } from "../../../hooks/useColorToggler";
import { sortByValue } from "../..";
import { useState } from "react";

export const SortButtons = () => {
	const colorToggler = useColorToggler();
	const dispatch = useDispatch();
	const [selectVal, setSelectVal] = useState("Newest");
	const changeHandler = (e) => {
		setSelectVal(e.target.value);
		dispatch(sortByValue(e.target.value));
	};
	return (
		<Flex
			direction={["row", "row", "row", "column"]}
			py={["5", "5", "5", "0"]}
			justifyContent={[
				"space-around",
				"space-around",
				"space-around",
				"flex-start",
			]}
			width={["100%", "100%", "100%", "48"]}
			gap="4"
		>
			<Button
				leftIcon={<BiTrendingUp />}
				onClick={() => dispatch(sortByValue("trending"))}
			>
				what's trending
			</Button>
			<Select
				bgColor={colorToggler(800)}
				value={selectVal}
				onChange={changeHandler}
				w={["fit-content", "fit-content", "fit-content", "100%"]}
				borderColor={colorToggler(600)}
			>
				<option value="Oldest" bgColor={colorToggler(400)}>
					Oldest Posts
				</option>

				<option value="Newest">Newest Posts</option>
			</Select>
		</Flex>
	);
};
