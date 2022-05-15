import { Routes, Route } from "react-router-dom";
import {
	Login,
	SignUp,
	Home,
	UserProfile,
	Bookmarks,
	Explore,
	Comments,
} from "../features";
import { PageNotFound } from "../components/PageNotFound";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<PrivateRoutes />}>
				<Route path="/" element={<Home />}>
					<Route path="/profile/:username" element={<UserProfile />} />
					<Route path="/bookmarks" element={<Bookmarks />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="/comments/:postId" element={<Comments />} />
				</Route>
			</Route>
			<Route path="*" element={<PageNotFound />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<SignUp />} />
		</Routes>
	);
};
