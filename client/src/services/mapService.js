import axios from 'axios';
import { getNearbyPlacesResult } from './responses/mockData';

export const getNearbyPlaces = async (query, lat, long, limit = 5, radius = 1000) => {
	if (import.meta.env.VITE_IS_DEVELOPMENT === 'true') {
		return getNearbyPlacesResult;
	} else {
		let baseUrl = 'https://api.tomtom.com/search/2/poiSearch';
		let queryString = `limit=${limit}&lat=${lat}&lon=${long}&radius=${radius}&key=${
			import.meta.env.VITE_TOMTOM_API_KEY
		}`;
		const encodedQuery = encodeURIComponent(query);
		console.log(`${baseUrl}/${encodedQuery}.json?${queryString}`);
		let response = await axios.get(`${baseUrl}/${encodedQuery}.json?${queryString}`);
		return response.data.results;
	}
};
