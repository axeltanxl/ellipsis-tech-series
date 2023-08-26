import { Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage";
import Nearby from "../pages/NearbyPage";
import Food from "../pages/FoodPage";
import Profile from "../pages/ProfilePage";
import FoodApi from '../pages/FoodApiPage';

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/nearby" element={<Nearby />} />
    <Route exact path="/food" element={<Food />} />
    <Route exact path="/foodapi" element={<FoodApi />} />
    <Route exact path="/profile" element={<Profile />} />
  </Routes>
);

export default AppRoutes;
