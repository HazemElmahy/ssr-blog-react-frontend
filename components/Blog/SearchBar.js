import React from 'react'

class SearchBar extends React.Component{
	state = {term: ''};


	render(){
		return (
			<div class="ui action input">
				<input type="text" 
						value={this.state.term}
						onChange={e => this.setState({term: e.target.value})} 
						placeholder="Search for a post..." />
				<button className="ui icon button black">
			  		<i className="search icon"></i>
  				</button>
			</div>

		)
	}
}

export default SearchBar