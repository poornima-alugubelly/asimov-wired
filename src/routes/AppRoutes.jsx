import { Routes, Route } from "react-router-dom";
import { Login, SignUp, Home, UserProfile } from "../features";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<PrivateRoutes />}>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<UserProfile />} />
			</Route>

			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
		</Routes>
	);
};
