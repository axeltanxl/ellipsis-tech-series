import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logOut, updateProgrammes } from "./state(kiv)"
import { useEffect } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { jwtHasExpired } from "./functions"



export const ProtectedRoute = () => {
    const userType = useSelector((state) => state.user.userBasicDetails.account_type)
    const navigate = useNavigate()
    useEffect(() => {
        if(jwtHasExpired()){
                localStorage.setItem("jwt", "");
                navigate("/login")
            }
    },[])
    return (
        userType ? 
        <Outlet/> :
        <Navigate to="/login"></Navigate>
    )
}

const jwtHasExpired = () => true;

// export const UnprotectedRoute = () => {
//     const userType = useSelector((state) => state.user.userBasicDetails.account_type)

//     return (
//         userType ? 
//         <Navigate to="/home"></Navigate> :
//         <Outlet/>
//     )
// }
