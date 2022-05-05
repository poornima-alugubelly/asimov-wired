import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/auth/Login";
import { Home } from "../pages/Home";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};
