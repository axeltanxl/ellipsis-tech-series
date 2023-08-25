import axios from 'axios';

export const searchFood = async (query) => {
	let config = {
		method: 'get',
		url: `https://trackapi.nutritionix.com/v2/search/instant?query=${query}`,
		headers: {
			'x-app-id': process.env.NUTRITIONIX_API_ID,
			'x-app-key': process.env.NUTRITIONIX_API_KEY,
		},
	};

	try {
		const response = await axios.request(config);
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const searchNutritionByFoodName = async (query) => {
	let data = JSON.stringify({
		query,
	});

	let config = {
		method: 'post',
		url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
		headers: {
			'Content-Type': 'application/json',
			'x-app-id': process.env.NUTRITIONIX_API_ID,
			'x-app-key': process.env.NUTRITIONIX_API_KEY,
		},
		data: data,
	};

	try {
		const response = await axios.request(config);
		console.log(response);
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const searchFoodWithNLP = async (query) => {
	let data = JSON.stringify({
		query: query,
		timezone: 'Asia/Singapore',
	});

	let config = {
		method: 'post',
		url: `https://trackapi.nutritionix.com/v2/natural/nutrients`,
		headers: {
			'content-type': 'application/json',
			accept: 'application/json',
			'x-app-id': process.env.NUTRITIONIX_API_ID,
			'x-app-key': process.env.NUTRITIONIX_API_KEY,
		},
		data,
	};

	try {
		const response = await axios.request(config);
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
