import { useMutation, useQuery } from "@tanstack/react-query"
import { getUserMeals, createMeal, getSingleMeal, getFilteredMeals } from "../../services/mealServices"

export const useGetUserMeals = () => {
    return useQuery(["All Meals"], getUserMeals)
}

export const useCreateMeal = () => {
    return useMutation(createMeal, {
        onSuccess : (data) => {
            console.log(data)
        },
        onError : (err)=> {
            const errorMessage = err.response.data.message 
            // alert(errorMessage);
        }
    })
}

export const useGetSingleMeal = (id) => {
    return useQuery(["Single Meals"], () => getSingleMeal(id))
}

// for useGetSingleMeal

// import { useGetSingleMeal } from "../hooks/requests/mealRoutes";
// import { useSelector } from "react-redux";
// const meals = useSelector((state) => state.example.mealData)
//     const id = meals[0].id;
//     console.log(id);
//     const {data, isSuccess} = useGetSingleMeal(id);
//     if(isSuccess){
//         console.log(data)
//     }




export const useGetFilteredMeals = () => {
    return useMutation(getFilteredMeals, {
        onSuccess : (data) => {
            console.log(data)
        },
        onError : (err)=> {
            const errorMessage = err.response.data.message 
            // alert(errorMessage);
        }
    })
}

// for useGetFilteredMeals
// import { useGetFilteredMeals } from "../hooks/requests/mealRoutes";
// const { mutate : getFilteredMeals } = useGetFilteredMeals();
//     getFilteredMeals({
//         startDate: "2023-08-26",
//         endDate: "2023-08-27"})