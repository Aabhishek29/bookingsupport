import React from "react";
import './style/Footer.css';
import {Link} from "react-router-dom";
import  { IoLocationSharp } from 'react-icons/io5';
import { AiTwotonePhone } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
    return(
        <div className={'footer'}>
            <div className={'footer-navigator'}>
                <header className={'footer-navigator-text'}>Get ready to work with us</header>
                <div className={'footer-navigator-div'}>
                    <Link className={'footer-navigator-join-link'} to={'form'}>Join Us</Link>
                </div>
            </div>
            <div className={'footer-div'}>
                <div className={'footer-left-div'}>
                    <header className={'footer-div-header'}>BookingSupport.in</header>
                    <p color={'#ddd'}>
                        Find a new favicon to replace the default React favicon. Google
                        Image search for an icon/emoji and save the image you like
                        somewhere on your computer. It’s best to find an image that’s in
                        .png format and has a transparent background. For this ‘To-Do List’
                        example, I searched for a green checkmark icon, and saved it to my
                        desktop. Find a new favicon to replace the default React favicon. Google
                        Image search for an icon/emoji and save the image you like
                        somewhere on your computer. It’s best to find an image that’s in
                        .png format and has a transparent background. For this ‘To-Do List’
                        example, I searched for a green checkmark icon, and saved it to my
                        desktop
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
                        <label>+91-72518-75859</label>
                    </div>
                    <br></br>
                    <div className={'footer-contact-us-div'}>
                        <div className={'footer-contact-us-icon'}>
                            <GrMail stroke="white" color="white" fontSize={20}/>
                        </div>
                        <label color={'#ababab'}>BookingSupport@gmail.com</label>
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
        </div>
    )
}

export default Footer;