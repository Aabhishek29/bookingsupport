import React from "react";
import { Link } from "react-router-dom";
import './style/navigation.css';
import { BsList } from 'react-icons/bs';
// import Logo from '../assets/favicon.ico';

class NavigationBar extends React.Component{
	constructor() {
		super();
		this.state = {
			isDropDown: window.innerWidth > 900,
			width: window.innerWidth,
		}
	}
	showDropDown = () => {
		this.setState({ isDropDown: !this.state.isDropDown});
	}

	render() {
		return (
			<div className={'navigation'}>
				<div className="nav-bar">
					{/*<img id={'navigation-icon'} src={Logo} alt={'something went wrong'}/>*/}
					<header className="navigation-title">Bookingsupport.in</header>
					{this.state.isDropDown && (
						<ul className="navigation-bar">
							<li className="nav-item">
								<Link className="navigation-link" to="/">Home</Link>
							</li>
							<li className="nav-item">
								<Link className="navigation-link" to="/about">About us</Link>
							</li>
							<li className="nav-item">
								<Link className="navigation-link" to="/faq">FAQ</Link>
							</li>
							<li className="nav-item">
								<Link className="navigation-link" to="/contact">Contact us</Link>
							</li>
							<l1 className="nav-item" id="join-us-button" >
								<Link className={'join-now-button'} to='/form'>Join Us</Link>
							</l1>
						</ul>
					)}
				</div>
				<div className={"navigation-bar-list"}>
					<BsList onClick={this.showDropDown} fontSize={24}/>
				</div>
			</div>
		)
	}
}

export default NavigationBar;