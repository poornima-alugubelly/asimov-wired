import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
export const PrivateRoutes = () => {
	const { token } = useSelector((state) => state.auth);
	const location = useLocation();
	return token ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};
