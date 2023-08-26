import { searchFood, searchNutritionByFoodName, searchFoodWithNLP } from '../services/foodService';
import { useQuery } from '@tanstack/react-query';


export const useNLPS = (query) => {
    return useQuery(["search nutrition from food"], () => searchFoodWithNLP(query));
}