import React from "react";
import { Link } from "react-router-dom";
import './navigation.css'

const NavigationBar = () => {
  return(
		<div className="nav-bar">
			<header className="navigation-title">Bookingsupport.in</header>
			<ul className="navigation-bar">
				<li className="nav-item">
					<Link className="navigation-link" to="/">Home</Link>
				</li>
				<li className="nav-item">
					<Link className="navigation-link" to="/projects">About us</Link>
				</li>	
				<li className="nav-item">
					<Link className="navigation-link" to="/contact">FAQ</Link>
				</li>
				<li className="nav-item">
					<Link className="navigation-link" to="/contact">Contact us</Link>
				</li>
			</ul>
			<div className="form-navigation-btn">
				<Link className="form-link">Join</Link>
			</div>
		</div>
	)
}

export default NavigationBar;