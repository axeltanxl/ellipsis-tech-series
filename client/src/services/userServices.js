import {axiosInstance} from "../utils/axiosInstance";

export async function login(user) {
    const res = await axiosInstance({
        method: "post",
        url: "/users/login",
        data: user
    })
    console.log(res)
    localStorage.setItem("jwt", res.data.accessToken);
    return ( res.data )
}

export async function register(user) {
    const res = await axiosInstance({
        method: "post",
        url: "/users/register",
        data: user
    })
    console.log(res)
    localStorage.setItem("jwt", res.data.accessToken);
    return ( res.data )
}
