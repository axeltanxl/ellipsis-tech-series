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

	return (
		<Layout>
			<Banner
				geoLocation={geoLocation}
				geoError={geoError}
			/>

			<div
				ref={mapElement}
				style={{ width: '100%', height: '400px' }}
			></div>
		</Layout>
	);
};

export default Nearby;
