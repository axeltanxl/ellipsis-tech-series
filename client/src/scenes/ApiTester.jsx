import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { searchFood, searchNutritionByFoodName } from '../services/foodService';

function FoodSearch() {
	const [foods, setFoods] = useState([]);
	useEffect(() => {
		async function fetchData() {
			try {
				const nutritionData = await searchFood('kway teow');
				console.log(JSON.stringify(nutritionData));
				const commonFoods = nutritionData.common || [];

				setFoods(commonFoods);
			} catch (error) {
				console.log('Error:', error);
			}
		}

		fetchData();
	}, []);

	return (
		<div>
			<h1>List of Food Names</h1>
			<ul>
				{foods.map((food, index) => (
					<li key={index}>
						<a
							href="#"
							onClick={() => searchNutritionByFoodName(food.food_name)}
						>
							{food.food_name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

const ApiTester = () => {
	return (
		<Box>
			<Typography>API tester</Typography>
			<FoodSearch />
		</Box>
	);
};

export default ApiTester;
