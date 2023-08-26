import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { setMealData } from "../store/ExampleSlice"
import { useGetUserMeals } from "../hooks/requests/mealRoutes"
import jwt_decode from "jwt-decode";


export const jwtHasExpired = () => {
    const jwt = localStorage.getItem("jwt")
    if(!jwt){return true;}
    try {
        const expiry = jwt_decode(jwt).exp
        const currentTime = new Date().getTime() / 1000;
        return (currentTime > expiry);
    } catch (error) {
        console.log("invalid jwt")
        localStorage.setItem("jwt", "")
        return true;
    }
}

export const ProtectedRoute = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {data : meals, isSuccess, isLoading, isError} = useGetUserMeals();
    useEffect(() => {
        if(jwtHasExpired()){
                localStorage.setItem("jwt", "");
                navigate("/login");
            }
    },[])
    if(isSuccess){
        console.log(meals.data);
        dispatch(setMealData(meals.data))
    }
    return (
        jwtHasExpired() ? 
        <Navigate to="/login"></Navigate> : <Outlet/>
    )
}



// export const UnprotectedRoute = () => {
//     const userType = useSelector((state) => state.user.userBasicDetails.account_type)

//     return (
//         userType ? 
//         <Navigate to="/home"></Navigate> :
//         <Outlet/>
//     )
// }
