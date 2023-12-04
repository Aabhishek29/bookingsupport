import React from "react";
import { useState } from 'react';
import './style/Contact.css';
import Icon from "../assets/contact_us.png";
import Logo from "../assets/contact_us_intro.png";
import axios from "axios";
import { Dots } from "react-activity";
import "react-activity/dist/library.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [hotelName, setHotelName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [isloading, setIsLoading] = useState(false);

    const onFormSubmit = async () => {
        setIsLoading(true);
        if(email === "" || name === "" || hotelName === "" || message === "" || phone === "" ){
            alert("Please Enter proper details");
            setIsLoading(false);
            return
        }
        if(phone.length < 10 && phone.length > 10){
            alert("Please Enter correct mobile number");
            setIsLoading(false);
            return
        }
        const payload = {
            "name": name,
            "email": email,
            "issue": hotelName,
            "phoneNumber": phone,
            "msg": message
        }
        axios.post("http://13.232.196.135:8000/api/contact_us",payload)
        .then((res)=>{
            setIsLoading(false)
            alert(res.data.data);
        }).catch((e)=>{
            setIsLoading(false);
            alert("Something went Wrong please try again later")
        })
    }

    return(
        <div className={'contact'}>
            <div className={'faq-introduction-div'}>
                <header className={'faq-introduction-div-header'}>Send BookingSupport.in a Message</header>
                <div className={'faq-section'}>
                    <div className={'faq-introduction-div-description'}>
                        <label className={'faq-introduction-div-description-text'}>
                            You’re welcome to ask us a question about anything. Before you write, please see
                            FAQs if you have any question regarding our services. It might help you to find almost
                            every answer you want from us. Please, click on FAQ for your queries.
                        </label>
                        <div className={'image-icon-section'}>
                            <img className={'image-icon'} src={Icon} alt={'something went wrong'}/>
                        </div>
                    </div>
                    <div className={'image-section'}>
                        <img className={'image-logo'} id={'contact-us-image'} src={Logo} alt={'something went wrong'}/>
                    </div>
                </div>
            </div>
            <div className={'contact-us-header'}>
                <header>Ask Anything</header>
            </div>
            <div className={'contact-us-form'}>
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
                { isloading ? (
                    <div style={{width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                        <Dots size={24} />
                        
                    </div>
                )
                 : (<button className={'form-submit-button'} onClick={onFormSubmit} >Send Enquiry</button>)}
            </div>
        </div>
    )
}

export default Contact;