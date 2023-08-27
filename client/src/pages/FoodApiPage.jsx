import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import {
	searchFood,
	searchNutritionByFoodName,
	searchFoodWithNLP,
	fuzzySearchFoodByLocation,
} from '../services/foodService';

const FoodApi = () => {
	return (
		<Layout>
			<FoodLocationSearch />
		</Layout>
	);
};

const FoodLocationSearch = async () => {
	const results = await fuzzySearchFoodByLocation('mcdonald burger');
	// return <p>hi</p>;
};

function FoodSearch() {
	const [foods, setFoods] = useState([]);
	const [restaurants, setRestaurants] = useState([]);

	const firstUpdate = useRef(true);
	useLayoutEffect(() => {
		async function fetchData() {
			try {
				const nutritionData = await searchFood('kaya toast');
				console.log(JSON.stringify(nutritionData));
				const commonFoods = nutritionData.common || [];
				const brandedFoods = nutritionData.branded || [];

				setFoods(commonFoods);
				setRestaurants(brandedFoods);
			} catch (error) {
				console.log('Error:', error);
			}
		}

		if (firstUpdate.current) {
			firstUpdate.current = false;
			fetchData();
		}

		return;
	}, []);

	return (
		<div>
			<p>Searching for kaya toast</p>
			<h2>List of Food Names</h2>
			<ul>
				{foods.map((food, index) => (
					<li key={index}>
						<a
							href="#"
							onClick={() => searchNutritionByFoodName(food.food_name)}
						>
							{food.food_name}
						</a>
						{food.something && <span> - {food.something}</span>}
					</li>
				))}
			</ul>
			{restaurants.length > 0 && (
				<div>
					<h2>Restaurant</h2>
					<ul>
						{restaurants.map((restaurant, index) => (
							<li key={index}>
								{restaurant.brand_name} - {restaurant.food_name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

function NLPSearch() {
	const [foods, setFoods] = useState([]);

	const firstUpdate = useRef(true);
	useLayoutEffect(() => {
		async function fetchData() {
			try {
				const nutritionData = await searchFoodWithNLP('2 eggs and 1 bacon');
				console.log(JSON.stringify(nutritionData));
				const food = nutritionData.foods;

				setFoods(food);
			} catch (error) {
				console.log('Error:', error);
			}
		}

		if (firstUpdate.current) {
			firstUpdate.current = false;
			fetchData();
		}
		return;
	}, []);

	return (
		<div>
			<p>Searching for 2 eggs and 1 bacon</p>
			<h2>List of Food Names</h2>
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

export default FoodApi;
