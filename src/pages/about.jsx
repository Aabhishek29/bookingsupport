import React from 'react';
import Icon from "../assets/about_us_i_section.png";
import Logo from "../assets/about_us_intro_image.png";
import JoinUsBoard from "../components/joinUsBoard";
import './style/about.css'
import companyData from "./companyData.json";
import CardView from "../components/CardView";

const About = () => {
    return (
        <div className={'about'} style={{overflowX: 'hidden'}}>
            <div className={'faq-introduction-div'}>
                <header className={'faq-introduction-div-header'}>About Us</header>
                <div className={'faq-section'}>
                    <div className={'faq-introduction-div-description'}>
                        <label className={'faq-introduction-div-description-text'}>
                            Booking support is widely used and recommended by world class Hotel
                            managers, Hoteliers, Revenue managers and Front office managers.
                            Partnering with BookingSupport.in has been a rewarding experience for most of the hotels. 
                            We provide a easy-to-use partner portal which simplifies the management of bookings, and the 'Partner Rewards' program adds an extra layer of motivation.
                            
                        </label>
                        <div className={'image-icon-section'}>
                            <img className={'image-icon'} src={Icon} alt={'something went wrong'}/>
                        </div>
                    </div>
                    <div className={'image-section'}>
                        <img className={'image-logo'} src={Logo} alt={'something went wrong'}/>
                    </div>
                </div>
            </div>
            <div>
                <div className={'advantage-block'}>
                    <JoinUsBoard context={'Get the BookingSupport.in advantage'} />
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
                <div className={'dashboard-cards'}>
                    {companyData.data[1].map((data) => {
                        return(
                            <div style={{
                                margin: 10,
                            }}>
                                <CardView description={data.description} owner={data.owner} />
                            </div>
                        )
                    })}
                </div>
                {/* <div className={'dashboard-cards'}>
                    {companyData.data.map((data) => {
                        return(
                            <div style={{
                                margin: 10,
                            }}>
                                <CardView description={data.description} owner={data.owner} />
                            </div>
                        )
                    })}
                </div> */}
                <div className={'advantage-block'}>
                    <JoinUsBoard context={'Convinced? Sign up today!'} />
                </div>
            </div>
        </div>
    )
}

export default About;