import React, { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import Banner from '../components/maps/Banner';
import { fuzzySearchFoodByLocation } from '../services/foodService';

import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';

const Nearby = () => {
	const mapElement = useRef(null);

	const [geoLocation, setGeoLocation] = useState({ latitude: 1.296568, longitude: 103.852119 });
	const [geoError, setGeoError] = useState(null);
	const [searchQuery, setSearchQuery] = useState('');
	const [markers, setMarkers] = useState([]);

	const [restaurantResults, setRestaurantResults] = useState([]);

	useEffect(() => {
		if (geoLocation.latitude && geoLocation.longitude) {
			const map = tt.map({
				key: import.meta.env.VITE_TOMTOM_API_KEY, // Use your API key
				container: mapElement.current,
				center: [geoLocation.longitude, geoLocation.latitude],
				zoom: 13,
			});

			setMarkers([]);
			addMarkers(map);

			return () => {
				map.remove();
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
				key: import.meta.env.VITE_TOMTOM_API_KEY, // Use your API key
				container: mapElement.current,
				center: [geoLocation.longitude, geoLocation.latitude],
				zoom: 13,
			});

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
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					marginBottom: '20px',
				}}
			>
				<input
					type="text"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					placeholder="Enter your query..."
				/>
				<button onClick={handleSearch}>Search</button>
			</div>
			<div>
				{restaurantResults.map((restaurant, index) => (
					<div key={index}>
						<h3>{restaurant.restaurant_name}</h3>
						<p>Location Count: {restaurant.locations.length}</p>
						<h4>Locations:</h4>
						<ul>
							{restaurant.locations.map((location, locationIndex) => (
								<li key={locationIndex}>
									{location.poi.name} - {location.address.freeformAddress}
								</li>
							))}
						</ul>
						<h4>Food available</h4>
						<ul>
							{restaurant.available_options.map((food, foodIndex) => (
								<li key={foodIndex}>{food.food_name}</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div
				ref={mapElement}
				style={{ width: '100%', height: '400px' }}
			></div>
		</Layout>
	);
};

export default Nearby;
