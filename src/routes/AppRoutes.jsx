import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { SignUp } from "../pages/auth/SignUp";
import { Home } from "../pages/Home";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<PrivateRoutes />}>
				<Route path="/" element={<Home />} />
			</Route>

			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
		</Routes>
	);
};
