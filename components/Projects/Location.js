import React, {Component} from 'react'


class Location extends Component{
	constructor(props) {
		super(props);
		this.state = {latitude: null, longitude:null, errorMessage:''}

		
	}

	componentDidMount(){
		if (typeof window !== 'undefined'){
			window.navigator.geolocation.getCurrentPosition(
				position => {this.setState({ latitude: position.coords.latitude.toFixed(2),
											 longitude: position.coords.longitude.toFixed(2)
											})},
				err => this.setState({ errorMessage: err.message})
			)
		}
	}

	render(){
		return(
			<div>
				<div className='location'>
					<h1>I know you location:</h1>
					<h1>
					{this.state.latitude ? [`Your coordinates: ${this.state.latitude}, ${this.state.longitude}`] 
					: (this.state.errorMessage == 'User denied geolocation prompt') || (this.state.errorMessage == 'User denied Geolocation') ? [' YOU DARE BLOCKING ME?😠']
					: <div><p className='loader'></p><p className='loading'>&nbsp;Loading...</p></div> }
					</h1>
				</div>
			</div>


		)
	}


}

export default Location