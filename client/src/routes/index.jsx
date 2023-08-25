import { Route, Routes } from "react-router-dom";
import App from "../App";
import Nearby from "../pages/NearbyPage";
import Food from "../pages/FoodPage";
import Profile from "../pages/ProfilePage";

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<App />} />
    <Route exact path="/nearby" element={<Nearby />} />
    <Route exact path="/food" element={<Food />} />
    <Route exact path="/profile" element={<Profile />} />
  </Routes>
);

export default AppRoutes;
