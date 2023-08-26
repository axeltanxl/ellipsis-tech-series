import { Box, Typography } from '@mui/material';
import { useEffect, useState, Component } from 'react';
import { searchFood, searchNutritionByFoodName, searchFoodWithNLP } from '../services/foodService';

function FoodSearch() {
	const [foods, setFoods] = useState([]);
	const [restaurants, setRestaurants] = useState([]);
	useEffect(() => {
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
	useEffect(() => {
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

class ApiTester extends Component {
	constructor(props) {
		super(props);
		this.state = {
			geoLocation: {},
			geoError: null,
			searchResults: [],
		};
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			(e) => {
				this.setState({
					geoLocation: e.coords,
				});
			},
			async (err) => {
				this.setState({
					geoError: err,
				});
			}
		);
	}

	render() {
		return (
			<Box>
				<Typography>API tester</Typography>
				<NLPSearch />
				<Typography>API tester</Typography>
				<FoodSearch />
			</Box>
		);
	}
}

export default ApiTester;
