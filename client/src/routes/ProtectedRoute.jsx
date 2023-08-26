import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { useQueryClient } from "@tanstack/react-query"

export const jwtHasExpired = () => {
    const jwt = localStorage.getItem("jwt")
    if(!jwt){return false;}
    try {
        const expiry = jwt_decode(jwt).exp
        const currentTime = new Date().getTime() / 1000;
        return (currentTime > expiry);
    } catch (error) {
        console.log("invalid jwt")
        return false;
    }
}

export const ProtectedRoute = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if(jwtHasExpired()){
                localStorage.setItem("jwt", "");
                navigate("/login");
            }
    },[])
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
