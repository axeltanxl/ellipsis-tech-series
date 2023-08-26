import { Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage";
import Nearby from "../pages/NearbyPage";
import Food from "../pages/FoodPage";
import Signup from "../pages/SignupPage";
// import Login from "../pages/LoginPage";
import FoodApi from "../pages/FoodApiPage";
// import Profile from "../pages/ProfilePage";

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/nearby" element={<Nearby />} />
    <Route exact path="/food" element={<Food />} />
    <Route exact path="/food" element={<FoodApi />} />
    <Route exact path="/signup" element={<Signup />} />
    {/* <Route exact path="/login" element={<Login />} />
    <Route exact path="/profile" element={<Profile />} /> */}
  </Routes>
);

export default AppRoutes;
