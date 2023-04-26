import React from "react";
import NavigationBar from "../components/NavigationBar";
import './dashboard.css';
import Logo from '../assets/booking-support-com-removebg-preview.png';
import {Link} from "react-router-dom";

const DashBoard = () => {
  return(
		<div>
			<NavigationBar />
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
							<Link to={'about-us'} className={'know-more-button-desktop'}>Know more</Link>
						</div>
					</div>
					<div className={'welcome-block-left'}>
						<img id={'welcome-icon'} src={Logo} alt={'something went wrong'}/>
						<div className={'welcome-button-mobile'}>
							<Link to={'about-us'} className={'know-more-button-mobile'}>Know more</Link>
						</div>
					</div>

				</div>
		</div>
  )
}

export default DashBoard;