import React from "react";
import { useState } from 'react';
import './style/Contact.css';
import Icon from "../assets/iiicon.png";
import Logo from "../assets/faq.png";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [hotelName, setHotelName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const onFormSubmit = () => {
        console.log("Hello world");
    }

    return(
        <div className={'contact'}>
            <div className={'faq-introduction-div'}>
                <header className={'faq-introduction-div-header'}>Send BookingSupport.in a Message</header>
                <div className={'faq-section'}>
                    <div className={'faq-introduction-div-description'}>
                        <label className={'faq-introduction-div-description-text'}>
                            You’re welcome to shoot us a question about anything at all. Before you write, please
                            see FAQs if you have any question regading our services. It will help you find almost
                            every answer you want from us. Please, click on FAQ for your queries.
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
            <div className={'contact-us-header'}>
                <header>Ask Anything</header>
            </div>
            <form onSubmit={onFormSubmit} className={'contact-us-form'}>
                <div className={'form-div'}>
                    <div className={'contact-us-input'}>
                        <div className={'contact-us-label'}>
                            <label>Name</label>
                        </div>
                        <input className={'input-tag'} type={'text'} placeholder={"Name"} value={name}
                           onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={'contact-us-input'}>
                        <div className={'contact-us-label'}>
                            <label>Email Address</label>
                        </div>
                        <input className={'input-tag'} type={'email'} placeholder={"Example@email.com"} value={email}
                           onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className={'form-div'}>
                    <div className={'contact-us-input'}>
                        <div className={'contact-us-label'}>
                            <label>Hotel Name</label>
                        </div>
                        <input className={'input-tag'} type={'text'} placeholder={"Hotel Name"} value={hotelName}
                               onChange={(e) => setHotelName(e.target.value)} />
                    </div>
                    <div className={'contact-us-input'}>
                        <div className={'contact-us-label'}>
                            <label>Contact Number</label>
                        </div>
                        <input className={'input-tag'} type={'number'} placeholder={"00000-00000"} value={phone}
                               onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
                <div className={'contact-us-textarea'}>
                    <div className={'contact-us-label'}>
                        <label>Message</label>
                    </div>
                    <textarea rows={10} className={'textarea-tag'} placeholder={"Message..."} value={message}
                           onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button className={'form-submit-button'} type={'submit'} >Send Enquiry</button>
            </form>
        </div>
    )
}

export default Contact;