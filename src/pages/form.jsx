import React, { useState } from 'react';
import './style/form.css';

const Form = () => {
    const [hotelName, setHotelName] = useState("");
    return (
        <div className={'form'}>
            <header>Hotel/Guest House/Homestay/Apartment/Alternate Accommodation Name and Address*</header>
            <div className={'form-header-section'}>
                    <input className={'hotel-input-tag'} type={'text'} placeholder={"Hotel Name"} value={hotelName}
                           onChange={(e) => setHotelName(e.target.value)} />
            </div>
            <hr width={'60%'} style={{ marginTop: 20, marginBottom: 20 }} />
            <header id={'service-agreement-header'}>SERVICE AGREEMENT</header>
            <div className={'content-section'}>
                <div className={'content-form-section'}>
                    <label>Hotel Name :- {hotelName}</label>
                </div>
            </div>
        </div>
    )
}

export default Form;