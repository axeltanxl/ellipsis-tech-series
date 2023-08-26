import { Route, Routes } from 'react-router-dom';
import App from '../App';
import Nearby from '../pages/NearbyPage';
import Food from '../pages/FoodPage';
import Profile from '../pages/ProfilePage';
import FoodApi from '../pages/FoodApiPage';

const AppRoutes = () => (
	<Routes>
		<Route
			exact
			path="/"
			element={<App />}
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
			path="/profile"
			element={<Profile />}
		/>
		<Route
			exact
			path="/foodapi"
			element={<FoodApi />}
		/>
	</Routes>
);

export default AppRoutes;
