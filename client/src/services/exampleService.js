import axiosInstance from "../utils/axiosInstance"

export const exampleService = async () => {
    const res = await axiosInstance({
        method : "get",
        url : "/example_home"
    })
    return res.data
}