import React from "react";
import './style/dashboard.css';
import Logo from '../assets/welcome_image_bookingsupport.png';
import {Link} from "react-router-dom";
import KeyPointsView from "../components/keyPointsView";
import CardView from "../components/CardView";
import companyData from './companyData.json';
import JoinUsBoard from "../components/joinUsBoard";
import middle_image from '../assets/up.jpg';
import booking_support_logo from '../assets/booking.jpg';
import agoda_logo from '../assets/agoda.jpg';
import price_logo from '../assets/price.jpg';
import BulletPointsView from "../components/BulletPointsView";

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
			<JoinUsBoard context={'We’re always here to work for you'} />
			<BulletPointsView />
			<div className={'middle-section-site-name'}>
				<div className={'middle-section-site-name-div'}>
					<header style={{color : '#ededed'}}><i>BookingSupport</i></header>
					<header style={{color : '#ededed'}}><i>.in</i></header>
				</div>
			</div>
			<div className={'middle-logo-image-section'}>
				<img src={middle_image} alt={'something went wrong please refresh site'} />
			</div>
			
			<JoinUsBoard context={'It takes only few minutes...'} />
			<div className={'middle-logo-image-section'}>
			<div style={{width: '80%', backgroundColor: 'white', display: 'flex', justifyContent:'space-around', flexDirection: 'row', padding: 10, borderRadius: 40, marginTop: 80}}>
				<div style={{width: '30%',alignItems:'center', justifyContent: 'center', textAlign: 'center',marginTop: 12}}>
					<img style={{width: 200, height: 50}} src={booking_support_logo} alt={'something went wrong please refresh site'} />
				</div>
				<div style={{width: '30%',alignItems:'center', justifyContent: 'center', textAlign: 'center',marginTop: 12,}}>
					<img style={{width: 170, height: 60}} src={agoda_logo} alt={'something went wrong please refresh site'} />
				</div>
				<div style={{width: '30%',alignItems:'center', justifyContent: 'center', textAlign: 'center',marginTop: 12}}>
					<img style={{width: 200, height: 50}} src={price_logo} alt={'something went wrong please refresh site'} />
				</div>
			</div>
			</div>
			<div className={'dashboard-lower-division'}>
				<header className={'dashboard-lower-division-header'}>Feedback</header>
				<div className={'dashboard-lower-division-discription'}>
					<label className={'dashboard-lower-division-discription-text'}>Many Hotels </label>
					<label className={'dashboard-lower-division-discription-text'} style={{
						color: '#ff9900',
					}}>Chooses </label>
					<label className={'dashboard-lower-division-discription-text'}>BookingSupport.in</label>
				</div>
			</div>
			<div className={'dashboard-cards'}>
					{companyData.data[0].map((data) => {
						return(
							<div style={{
								margin: 10,
							}}>
							<CardView description={data.description} owner={data.owner} />
							</div>
						)
					})}
				</div>
		</div>
  )
}

export default DashBoard;