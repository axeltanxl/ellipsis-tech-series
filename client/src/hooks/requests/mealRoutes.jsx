import { useMutation, useQuery } from "@tanstack/react-query"
import { getUserMeals, createMeal } from "../../services/mealServices"

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