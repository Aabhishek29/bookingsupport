import React from "react";
import { useState } from 'react';
import './style/Contact.css';

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
            <div className={'contact-us-header'}>
                <header>Ask Anything</header>
            </div>
            <form onSubmit={onFormSubmit} className={'contact-us-form'}>
                <div className={'form-div'}>
                    <div className={'contact-us-input'}>
                        <div className={'contact-us-label'}>
                            <label>Your Name</label>
                        </div>
                        <input className={'input-tag'} type={'text'} placeholder={"Your name"} value={name}
                           onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={'contact-us-input'}>
                        <div className={'contact-us-label'}>
                            <label>Email Address</label>
                        </div>
                        <input className={'input-tag'} type={'email'} placeholder={"Your name"} value={email}
                           onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className={'form-div'}>
                    <div className={'contact-us-input'}>
                        <div className={'contact-us-label'}>
                            <label>Hotel Name</label>
                        </div>
                        <input className={'input-tag'} type={'text'} placeholder={"Your name"} value={hotelName}
                               onChange={(e) => setHotelName(e.target.value)} />
                    </div>
                    <div className={'contact-us-input'}>
                        <div className={'contact-us-label'}>
                            <label>Contact Number</label>
                        </div>
                        <input className={'input-tag'} type={'number'} placeholder={"Your name"} value={phone}
                               onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
                <div className={'contact-us-textarea'}>
                    <div className={'contact-us-label'}>
                        <label>Message</label>
                    </div>
                    <textarea rows={10} className={'textarea-tag'} placeholder={"Your name"} value={message}
                           onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button className={'form-submit-button'} type={'submit'} >Send Enquiry</button>
            </form>
        </div>
    )
}

export default Contact;