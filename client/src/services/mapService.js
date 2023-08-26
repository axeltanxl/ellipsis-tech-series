import axios from 'axios';

export const getNearbyPlaces = async (query, lat, long, limit = 5, radius = 1000) => {
	let baseUrl = 'https://api.tomtom.com/search/2/poiSearch';
	let queryString = `limit=${limit}&lat=${lat}&lon=${long}&radius=${radius}&key=${
		import.meta.env.VITE_TOMTOM_API_KEY
	}`;
	console.log(`${baseUrl}/${query}.json?${queryString}`);
	let response = await axios.get(`${baseUrl}/${query}.json?${queryString}`);
	return response.data.results;
};
