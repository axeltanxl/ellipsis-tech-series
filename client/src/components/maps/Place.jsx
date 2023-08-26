import { Component } from 'react';

export default class Place extends Component {
	render() {
		console.log('place', this.props);
		if (this.props.data) {
			return (
				<div className={this.props.className}>
					<h1>{this.props.data.poi.name}</h1>
					<h3>
						{this.props.data.poi.classifications[0].code}|
						{(this.props.data.dist / 1000).toFixed(2)}km away
					</h3>
					<p>
						{this.props.data.address.streetNumber +
							' ' +
							this.props.data.address.streetName}
						<br />
						{this.props.data.address.municipality +
							', ' +
							this.props.data.address.countrySubdivision +
							' ' +
							this.props.data.address.postalCode}
					</p>
				</div>
			);
		} else {
			return null;
		}
	}
}
