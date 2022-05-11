import {
	FormControl,
	FormLabel,
	Input,
	Text,
	Center,
	Box,
	Flex,
	Button,
	VStack,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import { useColorToggler } from "../../hooks/useColorToggler";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { usePwdToggler } from "../../hooks/usePwdToggler";
import { loginUser } from "./authSlice";

export const Login = () => {
	const colorToggler = useColorToggler();
	const { pwdToggle, pwdToggler } = usePwdToggler();
	const [formVal, setFormVal] = useState({ username: "", password: "" });
	const dispatch = useDispatch();
	const { token, user, authStatus, authError } = useSelector(
		(state) => state.auth
	);
	const navigate = useNavigate();

	const loginHandler = async (e, username, password) => {
		setFormVal({ username, password });
		e.preventDefault();
		const res = await dispatch(loginUser({ username, password }));

		if (res?.payload.encodedToken) {
			navigate("/");
		}
	};

	return (
		<Flex
			align="center"
			justify="center"
			margin="auto"
			h="full"
			w="full"
			layerStyle="holoBg"
		>
			<Box
				h="max"
				w="max"
				border="1px solid"
				borderColor={colorToggler(400)}
				bg={colorToggler(700)}
				p="8"
				m="2"
			>
				<Flex
					pb="4"
					className="logo"
					overflowWrap={"auto"}
					flexWrap="wrap"
					align="center"
					justify="center"
				>
					Welcome to <Text color={colorToggler(400)}>WIRED</Text>
				</Flex>
				<Center>
					<Text fontSize="2xl" pb="4">
						LOGIN
					</Text>
				</Center>
				<VStack spacing="4">
					<FormControl isRequired>
						<FormLabel htmlFor="username" isRequired mb="0">
							Username
						</FormLabel>
						<Input
							id="username"
							placeholder="Enter username..."
							value={formVal.username}
							onChange={(e) =>
								setFormVal((prev) => ({ ...prev, username: e.target.value }))
							}
						/>
					</FormControl>
					<FormControl isRequired>
						<FormLabel htmlFor="password" mb="0">
							Password
						</FormLabel>
						<InputGroup>
							<Input
								id="password"
								type={`${pwdToggle.type}`}
								placeholder="Enter password..."
								value={formVal.password}
								onChange={(e) =>
									setFormVal((prev) => ({ ...prev, password: e.target.value }))
								}
							/>

							<InputRightElement
								fontSize="1.2rem"
								onClick={() => pwdToggler()}
								children={
									pwdToggle.type === "password" ? <FaEyeSlash /> : <FaEye />
								}
							/>
						</InputGroup>
					</FormControl>
					{authError && <Text color={"red"}>{authError}</Text>}
					{formVal.username !== "adarshbalika" && authStatus === "loading" ? (
						<Button isLoading loadingText="Logging in..." w="full">
							Login
						</Button>
					) : (
						<Button
							w="full"
							onClick={(e) =>
								loginHandler(e, formVal.username, formVal.password)
							}
						>
							Login
						</Button>
					)}
					{formVal.username === "adarshbalika" && authStatus === "loading" ? (
						<Button
							isLoading
							loadingText="Logging in..."
							w="full"
							variant={"outline"}
						>
							Login as guest
						</Button>
					) : (
						<Button
							w="full"
							variant={"outline"}
							onClick={(e) =>
								loginHandler(e, "adarshbalika", "adarshBalika123")
							}
						>
							Login as guest
						</Button>
					)}
				</VStack>

				<Flex align="center" justify="center" gap={2} pt="2">
					<Text>Don't have an account?</Text>
					<Link to="/signup">
						<Text
							_hover={{ color: "brand.400" }}
							borderBottom="1px solid"
							borderBottomColor={colorToggler(100)}
						>
							Sign up
						</Text>
					</Link>
				</Flex>
			</Box>
		</Flex>
	);
};
