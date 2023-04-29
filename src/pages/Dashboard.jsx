import React from "react";
import './style/dashboard.css';
import Logo from '../assets/welcome_image_bookingsupport.png';
import {Link} from "react-router-dom";
import KeyPointsView from "../components/keyPointsView";

const DashBoard = () => {
  return(
		<div className={'dashboard'}>
			<div className={'welcome-block'}>
				<div className={'welcome-block-right'}>
					<header className={'welcome-text'}>Try to work with</header>
					<header className={'welcome-text-site-name'}>BookingSupport.in</header>
					<div className={'welcome-paragraph-block'}>
						<div className={'welcome-paragraph-div'}>
							<label className={'welcome-paragraph'}>This new service will make you earn</label>
						</div>
						<div className={'welcome-paragraph-div'}>
							<label className={'welcome-paragraph'}>50% more revenue for your property</label>
						</div>
					</div>
					<div className={'welcome-button-desktop'}>
						<Link to={'about'} className={'know-more-button-desktop'}>Know more</Link>
					</div>
				</div>
				<div className={'welcome-block-left'}>
					<img id={'welcome-icon'} src={Logo} alt={'something went wrong'}/>
					<br></br>
					<div className={'welcome-button-mobile'}>
						<Link to={'about'} className={'know-more-button-mobile'}>Know more</Link>
					</div>
				</div>
			</div>
			<KeyPointsView />
			<div className={'join-now'}>
				<header className={'join-now-text'}>We’re always here to work for you</header>
				<div className={'join-now-div'}>
					<Link className={'join-now-link'} to={'form'}>Join Us</Link>
				</div>
			</div>
			<div>
				<header>lower part</header>
			</div>
		</div>
  )
}

export default DashBoard;