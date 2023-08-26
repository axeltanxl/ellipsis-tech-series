import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const Nearby = () => {
	const [geoLocation, setGeoLocation] = useState({});
	const [geoError, setGeoError] = useState(null);

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
			<h1>Nearby</h1>
		</Layout>
	);
};

export default Nearby;
