import { searchFood, searchNutritionByFoodName, searchFoodWithNLP } from '../services/foodService';
import { useQuery } from '@tanstack/react-query';


export const useNLPS = (query) => {
    return useQuery({
    queryKey: ["search nutrition from food"], 
    queryFn : () => searchFoodWithNLP(query),
    retry : false
});
}