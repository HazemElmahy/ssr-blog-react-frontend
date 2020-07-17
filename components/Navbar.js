 import React,{Component} from 'react';
import Tilt from 'react-tilt'
import Link from 'next/link'
import Signin from '../components/Signin/Signin'
import Signup from '../components/Signin/Signup'
class Auth extends Component{
	constructor(){
		super();
		this.state = {
			route: 'signin'
		}
	}
}





const Navbar = () =>{
	return (
			<nav>
			<div className="sm-screen">
				<div className="line line1"></div>
	        	<div className="line line2"></div>
	        	<div className="line line3"></div>

        	</div>

			<ul className='bg-screen'>
			
 				<li className="dropdown">
				  <button className="grey darken-4 dropdown-trigger ba z-depth-5 btn-large waves-effect waves-light dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				    Pages
				  </button>
				  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				    <a className="dropdown-item" href="/">Home</a>
				    <a className="dropdown-item" href="/about">Blog</a>
				    <a className="dropdown-item" href="/projects">Projects</a>
				    <a className="dropdown-item" href="#">Profile</a>
				    
				  </div>
				</li>

			
 				<li className="dropdown">
				  <button className="grey darken-4 dropdown-trigger ba z-depth-5 btn-large waves-effect waves-light dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				    Sign in
				  </button>
				  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				    <Signin />
				    
				  </div>
				</li>

				<li className="dropdown">
				  <button className="grey darken-4 dropdown-trigger ba z-depth-5 btn-large waves-effect waves-light dropdown-toggle " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				    Sign up
				  </button>
				  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
				    <Signup />
				    
				  </div>
				</li>

			</ul>

			<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
		</nav>

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