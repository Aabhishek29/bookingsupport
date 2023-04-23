import React from "react";
import NavigationBar from "../components/NavigationBar";
import './dashboard.css';
import Logo from '../assets/booking-support-com-removebg-preview.png';

const DashBoard = () => {
  return(
		<div>
			<NavigationBar />
			<div className={'welcome-block'}>
				<div className={'welcome-block-right'}>
					<header className={'welcome-text'}>Try to work with</header>
					<header className={'welcome-text-site-name'}>BookingSupport.in</header>
				</div>
				<div className={'welcome-block-left'}>
					<img src={Logo} alt={'something went wrong'}/>
				</div>
			</div>
		</div>
  )
}

export default DashBoard;