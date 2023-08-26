import { Route, Routes } from 'react-router-dom';
import Home from '../pages/HomePage';
import Nearby from '../pages/NearbyPage';
import Food from '../pages/FoodPage';
import Signup1 from '../pages/SignupPage1';
import Signup2 from '../pages/SignupPage2';
import Login from '../pages/LoginPage';
import FoodApi from '../pages/FoodApiPage';
// import Profile from "../pages/ProfilePage";

const AppRoutes = () => (
	<Routes>
		<Route
			exact
			path="/"
			element={<Home />}
		/>
		<Route
			exact
			path="/nearby"
			element={<Nearby />}
		/>
		<Route
			exact
			path="/food"
			element={<Food />}
		/>
		<Route
			exact
			path="/foodapi"
			element={<FoodApi />}
		/>
		<Route
			exact
			path="/signup1"
			element={<Signup1 />}
		/>
		<Route
			exact
			path="/signup2"
			element={<Signup2 />}
		/>
		<Route
			exact
			path="/login"
			element={<Login />}
		/>
		{/* <Route exact path="/profile" element={<Profile />} /> */}
	</Routes>
);

export default AppRoutes;
