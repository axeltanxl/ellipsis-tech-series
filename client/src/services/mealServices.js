import {axiosInstance} from "../utils/axiosInstance";


export const getUserMeals = async () => {
    const res = await axiosInstance({
        method : "get",
        url : `/meals/getMine`,
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    })
    console.log(res);
    return res.data;
}

export const getSingleMeal = async (mealID) => {
    const res = await axiosInstance({
        method : "get",
        url : `/meals/${mealID}`,
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    })
    console.log(res);
    return res.data;
}

export const getFilteredMeals = async (dateRange) => {
    const res = await axiosInstance({
        method : "post",
        url : `/meals/filterDateRange`,
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
        data: dateRange
    })
    console.log(res);
    return res.data;
}

export const createMeal = async (meal) => {
    const res = await axiosInstance({
        method: "post",
        url: "/meals/create",
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
        data: meal
    })
    console.log(res);
    return (res.data)
}

