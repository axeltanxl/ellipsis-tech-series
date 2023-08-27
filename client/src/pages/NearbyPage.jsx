import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import Banner from '../components/maps/Banner';
import { fuzzySearchFoodByLocation } from '../services/foodService';

import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';

const Nearby = () => {
	const mapElement = useRef(null);
	const [map, setMap] = useState(null);
	const [markers, setMarkers] = useState([]);

	const [geoLocation, setGeoLocation] = useState({ latitude: 1.296568, longitude: 103.852119 });
	const [geoError, setGeoError] = useState(null);
	const [searchQuery, setSearchQuery] = useState('');

	const [restaurantResults, setRestaurantResults] = useState([]);

	useEffect(() => {
		if (geoLocation.latitude && geoLocation.longitude) {
			const map = tt.map({
				key: import.meta.env.VITE_TOMTOM_API_KEY,
				container: mapElement.current,
				center: [geoLocation.longitude, geoLocation.latitude],
				zoom: 13,
			});

			setMap(map);
			setMarkers([]);

			addMarkers(map);

			return () => {
				map.remove();
				setMap(null);
			};
		}
	}, [geoLocation]);

	const addMarkers = async (map) => {
		let finalResult = await fuzzySearchFoodByLocation(
			searchQuery,
			geoLocation.latitude,
			geoLocation.longitude
		);
		setRestaurantResults(finalResult);
		const locations = finalResult.restaurants.flatMap((restaurant) => restaurant.locations);

		const newMarkers = locations.map((location) => {
			const marker = new tt.Marker()
				.setLngLat([location.position.lon, location.position.lat])
				.addTo(map);

			return marker;
		});

		setMarkers(newMarkers);
	};

	const handleSearch = async () => {
		// Update markers based on the search query
		if (searchQuery) {
			// Clear existing markers
			markers.forEach((marker) => marker.remove());
			setMarkers([]);

			const map = tt.map({
				key: import.meta.env.VITE_TOMTOM_API_KEY,
				container: mapElement.current,
				center: [geoLocation.longitude, geoLocation.latitude],
				zoom: 13,
			});
			setMap(map);

			// Add new markers based on the search query
			await addMarkers(map);
		}
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(e) => {
				setGeoLocation({
					latitude: e.coords.latitude,
					longitude: e.coords.longitude,
				});
			},
			(err) => {
				setGeoError(err);
			}
		);
	}, []);

	return (
		<Layout>
			<Banner
				geoLocation={geoLocation}
				geoError={geoError}
			/>
			<div className="flex">
				<div className="w-1/2 p-4">
					{/* Search bar */}
					<div className="mb-4 flex items-center">
						<input
							type="text"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder="Enter your query..."
							className="px-3 py-2 border rounded-md w-full"
						/>
						<button
							onClick={handleSearch}
							className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
						>
							Search
						</button>
					</div>

					{/* Restaurant results */}
					<div>
						{restaurantResults.map((restaurant, index) => (
							// give it a different colour backoground or smth
							<div
								key={index}
								className="mb-4"
							>
								<h3 className="text-lg font-semibold">
									{restaurant.restaurant_name}
								</h3>
								<p className="mb-2">
									Location Count: {restaurant.locations.length}
								</p>
								<h4 className="font-semibold">Locations:</h4>
								<ul className="pl-4 mb-2">
									{restaurant.locations.map((location, locationIndex) => (
										<li
											key={locationIndex}
											className="list-disc"
										>
											{location.poi.name} - {location.address.freeformAddress}
										</li>
									))}
								</ul>
								<h4 className="font-semibold">Food available</h4>
								<ul className="pl-4">
									{restaurant.available_options.map((food, foodIndex) => (
										<li
											key={foodIndex}
											className="list-disc"
										>
											{food.food_name}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<div className="w-1/2">
					{/* Map */}
					<div
						ref={mapElement}
						className="w-full h-96"
					></div>
				</div>
			</div>
		</Layout>
	);
};

export default Nearby;
