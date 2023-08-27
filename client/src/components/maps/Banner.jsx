import { Component } from 'react';

export default class Banner extends Component {
	render() {
		console.log(this.props);
		if (this.props.geoLocation === undefined && this.props.geoError == null) {
			return <p>No permission</p>;
		}

		if (this.props.geoError) {
			return <p>{this.props.geoError.message}</p>;
		} else if (this.props.geoLocation.latitude) {
			return (
				<p>
					Lat: {this.props.geoLocation.latitude.toFixed(4)}
					Long: {this.props.geoLocation.longitude.toFixed(4)}
				</p>
			);
		} else {
			return null;
		}
	}
}
