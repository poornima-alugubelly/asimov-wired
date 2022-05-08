import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Auth/Login";
import { SignUp } from "../pages/Auth/SignUp";
import { Home } from "../pages/Home/Home";
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
