import React,{Component} from 'react';
import Link from 'next/link'
import Signin from '../components/Signin/Signin'
import Signup from '../components/Signin/Signup'

import DropDown from '../components/DropDown'
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'


class Auth extends Component{
	constructor(){
		super();
		this.state = {
			route: 'signin'
		}
	}
}





const Navbar = (props) =>{
	return (
			<Menu className='nav-bar light-red' attached='top'>
			<div className="sm-screen">
				<div className="line line1"></div>
	        	<div className="line line2"></div>
	        	<div className="line line3"></div>
        	</div>

			<ul className='bg-screen'>
				<div class="ui buttons register">
  					<button class="ui black button">Sign up</button>
  					<div class="or"></div>
  					<button class="ui  button">Sign in</button>
				</div>
				<DropDown/>

				{props.children}

			</ul>
			</Menu>

		)

}

if (typeof window !== 'undefined') {
	
	const smScreen = document.querySelector(".sm-screen");
	const line = document.querySelector(".line");
	const bigScreen = document.querySelector(".bg-screen");
	const links = document.querySelectorAll(".bg-screen li");

	smScreen.addEventListener("click", () => {
	bigScreen.classList.toggle("open");
	smScreen.classList.toggle("open");

	});
}




export default Navbar