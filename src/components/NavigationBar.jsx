import React from "react";
import { Link } from "react-router-dom";
import './style/navigation.css';
import { BsList } from 'react-icons/bs';
// import Logo from '../assets/favicon.ico';

const NavigationBar = () => {
  return(
	  <div className={'navigation'}>
		<div className="nav-bar">
			{/*<img id={'navigation-icon'} src={Logo} alt={'something went wrong'}/>*/}
			<header className="navigation-title">Bookingsupport.in</header>
			<ul className="navigation-bar">
				<li className="nav-item">
					<Link className="navigation-link" to="/">Home</Link>
				</li>
				<li className="nav-item">
					<Link className="navigation-link" to="/about-us">About us</Link>
				</li>	
				<li className="nav-item">
					<Link className="navigation-link" to="/faq">FAQ</Link>
				</li>
				<li className="nav-item">
					<Link className="navigation-link" to="/contact">Contact us</Link>
				</li>
			</ul>
		</div>
		  <div className={"navigation-bar-list"}>
			  <BsList fontSize={24} />
		  </div>
	  </div>
	)
}

export default NavigationBar;