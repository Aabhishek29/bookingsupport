import React from "react";
import './style/Footer.css';
import  { IoLocationSharp } from 'react-icons/io5';
import { AiTwotonePhone } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import JoinUsBoard from "./joinUsBoard";

const Footer = () => {
    return(
        <div className={'footer'}>
            <JoinUsBoard context={'Get ready to work with us'} />
            <div className={'footer-div'}>
                <div className={'footer-left-div'}>
                    <header className={'footer-div-header'}>BookingSupport.in</header>
                    <p color={'#ddd'}>
                        Thank you for choosing our booking website for all your travel needs. Whether you're planning
                        a vacation, business trip, or a quick getaway, we're here to make your booking experience
                        seamless and enjoyable. With our user-friendly interface, extensive selection of accommodations,
                        and competitive prices, you can easily find and reserve the perfect place to stay. Our dedicated
                        team is committed to providing excellent customer service and ensuring your satisfaction throughout
                        the entire booking process. Book with confidence and embark on your next adventure with us.
                        Start exploring today and let us help you create unforgettable travel memories
                    </p>
                </div>
                <div className={'footer-right-div'}>
                    <header className={'footer-div-header'}>Contact Us</header>
                    <div className={'footer-contact-us-div'}>
                        <div className={'footer-contact-us-icon'}>
                            <IoLocationSharp stroke="white" color="white" fontSize={20}/>
                        </div>
                        <label>doon Bussines park near isbt transport nagar dehradun</label>
                    </div>
                    <br></br>
                    <div className={'footer-contact-us-div'}>
                        <div className={'footer-contact-us-icon'}>
                            <AiTwotonePhone stroke="white" color="white" fontSize={20}/>
                        </div>
                        <div>
                            <div style={{
                                padding: 2
                            }}>
                                <label>+91 9548111813</label>
                            </div>
                            <div style={{
                                padding: 2
                            }}>
                                <label>+91 1353152734</label>
                            </div>
                            <div style={{
                                padding: 2
                            }}>
                                <label>+91 7251875859</label>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className={'footer-contact-us-div'}>
                        <div className={'footer-contact-us-icon'}>
                            <GrMail stroke="white" color="white" fontSize={20}/>
                        </div>
                        <label color={'#ababab'}>sigupbooking@gmail.com</label>
                    </div>
                </div>
            </div>
            <div className={'footer-navigation-icons'}>
                <div className={'footer-navigation-icons-div'}>
                    <a href={'https://instagram.com'}>
                        <FaInstagram stroke="white" color="white" fontSize={30}/>
                    </a>
                </div>
                <div className={'footer-navigation-icons-div'}>
                    <a href={'https://facebook.com'}>
                        <FaFacebookSquare stroke="white" color="white" fontSize={30}/>
                    </a>
                </div>
                <div className={'footer-navigation-icons-div'}>
                    <a href={'https://gmail.com'}>
                        <GrMail stroke="white" color="white" fontSize={30}/>
                    </a>
                </div>
            </div>
            <div className={'footer-copyright-div'}>
                <p>© All rights reseved, BookingSupport.in 2019 - 2023.</p>
            </div>
        </div>
    )
}

export default Footer;