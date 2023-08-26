import React, { useEffect, useState, Component, useRef } from 'react';
import Layout from '../components/Layout';
import Banner from '../components/maps/Banner';
import { getNearbyPlaces } from '../services/mapService';
import ReactSearchBox from 'react-search-box';
import Place from '../components/maps/Place';

import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';

const Nearby = () => {
	const mapElement = useRef(null);

	const [geoLocation, setGeoLocation] = useState({ latitude: 1.296568, longitude: 103.852119 }); // Default location
	const [geoError, setGeoError] = useState(null);
	const [searchResults, setSearchResults] = useState([]);
	const [selectedPlace, setSelectedPlace] = useState(null);

	useEffect(() => {
		let map = tt.map({
			key: import.meta.env.VITE_TOMTOM_API_KEY,
			container: mapElement.current,
			center: [geoLocation.longitude, geoLocation.latitude],
			zoom: 13,
		});
		return () => map.remove();
	}, [geoLocation]);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			(e) => {
				setGeoLocation(e.coords);
			},
			async (err) => {
				setGeoError(err);
			}
		);
	}, []);

	const onSearchChange = async (query) => {
		if (query.length > 0) {
			let results = await getNearbyPlaces(query, geoLocation.latitude, geoLocation.longitude);
			setSearchResults(results);
		}
	};

	const setPlace = (key) => {
		let place = searchResults.find((p) => p.id === key);
		setSelectedPlace(place);
	};

	return (
		<Layout>
			<Banner
				geoLocation={geoLocation}
				geoError={geoError}
			/>

			<ReactSearchBox
				placeholder="Search for nearby places"
				matchedRecords={searchResults
					.map((result) => ({
						key: result.id,
						name: result.poi.name,
						dist: result.dist,
						value: `${result.poi.name} | ${(result.dist / 1000).toFixed(2)}km `,
					}))
					.sort((a, b) => a.dist - b.dist)}
				data={searchResults
					.map((result) => ({
						key: result.id,
						name: result.poi.name,
						dist: result.dist,
						value: result.poi.name,
					}))
					.sort((a, b) => a.dist - b.dist)}
				onSelect={(place) => setPlace(place.key)}
				autoFocus={true}
				onChange={(query) => onSearchChange(query)}
				fuseConfigs={{
					minMatchCharLength: 0,
					threshold: 1,
					distance: 1000,
					sort: false,
				}}
				keys={['name']}
			/>

			<Place
				className="place-box"
				data={selectedPlace}
			/>

			<div
				ref={mapElement}
				style={{ width: '100%', height: '400px' }}
			></div>
		</Layout>
	);
};

export default Nearby;
