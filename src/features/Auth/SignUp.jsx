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
	FormErrorMessage,
} from "@chakra-ui/react";
import { useColorToggler } from "../../hooks/useColorToggler";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { usePwdToggler } from "../../hooks/usePwdToggler";
import { signupUser } from "./authSlice";

export const SignUp = () => {
	const colorToggler = useColorToggler();
	const { pwdToggle, pwdToggler } = usePwdToggler();
	const [formVal, setFormVal] = useState({
		firstName: "",
		lastName: "",
		email: "",
		username: "",
		password: "",
	});
	const { firstName, lastName, email, username, password } = formVal;
	const dispatch = useDispatch();
	const { token, user, authStatus, authError } = useSelector(
		(state) => state.auth
	);
	const validityChecker = () => {
		if (firstName === "" || /^[a-z0-9_.]+$/.test(firstName)) {
			return false;
		}
		if (lastName === "" || /^[a-z0-9_.]+$/.test(lastName)) {
			return false;
		}
		if (email === "" || /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
			return false;
		}
		if (username === "" || /^[a-z0-9_.]+$/.test(username)) {
			return false;
		}
		if (
			password === "" ||
			/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
		) {
			return false;
		}
		return true;
	};
	console.log(authError);
	const navigate = useNavigate();
	const [submitted, setSubmitted] = useState(false);
	const signUpHandler = async (e, formVal) => {
		e.preventDefault();
		if (!validityChecker()) {
			setSubmitted(true);
		} else {
			const res = await dispatch(signupUser(formVal));

			if (res?.payload.encodedToken) {
				navigate("/");
			}
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
				p="6"
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
						SIGN UP
					</Text>
				</Center>
				<VStack spacing="4">
					<FormControl
						isRequired
						isInvalid={
							firstName === "" || (/^[a-z0-9_.]+$/.test(firstName) && submitted)
						}
					>
						<FormLabel htmlFor="firstName" isRequired mb="0">
							First Name
						</FormLabel>
						<Input
							id="firstName"
							placeholder="Enter first name..."
							value={firstName}
							onChange={(e) =>
								setFormVal((prev) => ({ ...prev, firstName: e.target.value }))
							}
						/>
						{firstName === "" ||
						(/^[a-z0-9_.]+$/.test(firstName) && submitted) ? (
							<FormErrorMessage color="red">
								Enter a valid first name
							</FormErrorMessage>
						) : (
							""
						)}
					</FormControl>
					<FormControl
						isRequired
						isInvalid={lastName === "" || /^[a-z0-9_.]+$/.test(lastName)}
					>
						<FormLabel htmlFor="lastName" isRequired mb="0">
							Last Name
						</FormLabel>
						<Input
							id="lastName"
							placeholder="Enter last name..."
							value={lastName}
							onChange={(e) =>
								setFormVal((prev) => ({ ...prev, lastName: e.target.value }))
							}
						/>
						{lastName === "" ||
						(/^[a-z0-9_.]+$/.test(lastName) && submitted) ? (
							<FormErrorMessage color="red">
								Enter a valid lastname
							</FormErrorMessage>
						) : (
							""
						)}
					</FormControl>
					<FormControl
						isRequired
						isInvalid={email === "" || /^[a-z0-9_.]+$/.test(email)}
					>
						<FormLabel htmlFor="email" isRequired mb="0">
							Email
						</FormLabel>
						<Input
							id="email"
							placeholder="Enter email address..."
							value={email}
							onChange={(e) =>
								setFormVal((prev) => ({ ...prev, email: e.target.value }))
							}
						/>
						{email === "" || (/^[a-z0-9_.]+$/.test(email) && submitted) ? (
							<FormErrorMessage color="red">
								Enter a valid email
							</FormErrorMessage>
						) : (
							""
						)}
					</FormControl>
					<FormControl
						isRequired
						isInvalid={username === "" || /^[a-z0-9_.]+$/.test(username)}
					>
						<FormLabel htmlFor="username" isRequired mb="0">
							User Name
						</FormLabel>
						<Input
							id="username"
							placeholder="Enter username..."
							value={username}
							onChange={(e) =>
								setFormVal((prev) => ({ ...prev, username: e.target.value }))
							}
						/>
						{username === "" ||
						(/^[a-z0-9_.]+$/.test(username) && submitted) ? (
							<FormErrorMessage color="red">
								Enter a valid username
							</FormErrorMessage>
						) : (
							""
						)}
					</FormControl>
					<FormControl
						isRequired
						isInvalid={password === "" || /^[a-z0-9_.]+$/.test(password)}
					>
						<FormLabel htmlFor="password" mb="0">
							Password
						</FormLabel>
						<InputGroup>
							<Input
								id="password"
								type={`${pwdToggle.type}`}
								placeholder="Enter password..."
								value={password}
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
						{password === "" ||
						(/^[a-z0-9_.]+$/.test(password) && submitted) ? (
							<FormErrorMessage color="red">
								Enter a valid password
							</FormErrorMessage>
						) : (
							""
						)}
					</FormControl>
					{username !== "adarshbalika" && authStatus === "loading" ? (
						<Button isLoading loadingText="Logging in..." w="full">
							Sign up
						</Button>
					) : (
						<Button w="full" onClick={(e) => signUpHandler(e, formVal)}>
							Sign up
						</Button>
					)}
				</VStack>
				{authError && <Text color="red">{authError}</Text>}
				<Flex align="center" justify="center" gap={2} pt="2">
					<Text>Already Have an account?</Text>
					<Link to="/login">
						<Text
							_hover={{ color: "brand.400" }}
							borderBottom="1px solid"
							borderBottomColor={colorToggler(100)}
						>
							Login
						</Text>
					</Link>
				</Flex>
			</Box>
		</Flex>
	);
};
