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
                    Thank you for choosing BookingSupport for your hotel contract needs. Our commitment is to facilitate seamless agreements, ensuring trust and satisfaction for both hotels and clients. Explore our extensive range of services and discover the ease of securing the best contracts for your hospitality ventures. Your success is our priority.
                    </p>
                </div>
                <div className={'footer-right-div'}>
                    <header className={'footer-div-header'}>Contact Us</header>
                    <div className={'footer-contact-us-div'} style= {{lineHeight: 1}}>
                        <div className={'footer-contact-us-icon'}>
                            <IoLocationSharp stroke="white" color="white" fontSize={20}/>
                        </div>
                        <label style={{fontSize: 16, marginTop: 7}}>Doon Bussines Park, Near ISBT, Transport Nagar Dehradun</label>
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
                                <label style={{fontSize: 16}}>+91 9548111813, +91 7251875859</label>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className={'footer-contact-us-div'}>
                        <div className={'footer-contact-us-icon'}>
                            <GrMail stroke="white" color="white" fontSize={20}/>
                        </div>
                        <label color={'#ababab'}>signupbooking@gmail.com</label>
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
                    <a style={{cursor: 'pointer'}} onClick={()=> window.open('mailto:signupbooking@gmail.com',"_blank")}>
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