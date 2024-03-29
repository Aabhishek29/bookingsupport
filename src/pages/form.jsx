import React from 'react';
import './style/form.css';
import SignatureCanvas from 'react-signature-canvas'
import axios from 'axios';
import html2canvas from 'html2canvas';
import { Dots } from 'react-activity';


class Form extends React.Component {
    constructor() {
        super();

        let today = new Date(),
            date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        this.setHotelName = this.setHotelName.bind(this);
        this.setOwnerName = this.setOwnerName.bind(this);
        this.sendPDF = this.sendPDF.bind(this);
        this.state = {
            date: date,
            hotelName: "",
            ownerName: "",
            isError: false,
            base64data: undefined,
            isloading: false,
            email: "",
            showModel: false,
            errorMsg: ""
        };
    }
    isValidate(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    sendPDF = async () => {
        if (this.state.hotelName === "") {
            this.setState({errorMsg: "Please enter Hotel Name & Address"})
            return;
        }
        if ( !this.isValidate(this.state.email)) {
            this.setState({errorMsg: "Please enter valid email"})
            return;
        }
        console.log("This submit button")
        this.setState({ isloading: true})
        const input = document.getElementById('form');
        await html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                console.log(imgData)
                this.setState({ base64data: imgData });
                // const url = "http://13.232.196.135:8000/api/sendFormToBookingSupport";
                const url = "https://indzstudio.com/api/bookingsupport/form";
                const payload = {
                    "name": this.state.ownerName,
                    "email": this.state.email,
                    "hotelName": this.state.hotelName,
                    "form_image": imgData
                }
                console.log(payload);
                axios.post(url, payload)
                    .then((res) => {
                        this.setState({ isloading: false })
                        console.log(res)
                        alert("Thank You for choosing BookingSupport.in");
                        window.location.href = "/"
                    }).catch((e) => {
                        this.setState({ isloading: true })
                        console.log(e)
                        alert("Something went Wrong please try again later")
                        this.setState({ isloading: false })
                    })
            })
            .catch((err) => {
                this.setState({ isError: true, isloading: false });
            });

    }

    setHotelName = (value) => {
        this.setState({ hotelName: value });
    }

    setOwnerName = (res) => {
        this.setState({ ownerName: res });
    }

    sendEmail = (res) => {
        this.setState({email: res})
    }
    
    render() {

        return (
            <div>
                <div className={'form'} id='form'>
                    <header>Hotel/Guest House/Homestay/Apartment/Alternate Accommodation Name and Address*</header>
                    <div className={'form-header-section'}>
                        <input className={'hotel-input-tag'} type={'text'} placeholder={"Hotel Name & Address"} value={this.state.hotelName}
                            onChange={(e) => this.setHotelName(e.target.value)} />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 25}}>
                        <input className={'hotel-input-tag'} type={'email'} placeholder={"Please enter email for confirmation"} value={this.state.email}
                            onChange={(e) => this.sendEmail(e.target.value)} />
                    </div>
                    <hr width={'60%'} style={{ marginTop: 20, marginBottom: 20 }} />
                    <header id={'service-agreement-header'}>SERVICE AGREEMENT</header>
                    <div className={'content-section'}>
                        <div className={'content-form-section'}>
                            <label>This "No Objection Certificate" or N.O.C is made effective as of Date- {this.state.date} between
                                the Hotel <b>{this.state.hotelName}</b> and
                                Booking support (GST:05FFRPR0647D1Z9) with head office in Doon Business park
                                Transport Nagar Dehradun,
                                Uttarakhand (248001).</label>
                            <div className={'form-label'}>
                                <label>In this no objection certificate, the party who is contracting to receive services
                                    shall be referred
                                    to as "Hotel" and the party who will be providing the services shall be referred to as
                                    "Booking Support".</label>
                            </div>
                            <div className={'form-label'}>
                                <label>
                                    'Booking Support' is an MPP (Multiple Property Partner) with Booking.com and therefore
                                    has an expertise
                                    in booking management exclusively with booking.com and thus is willing to provide its
                                    services to below
                                    mentioned Hotel - <b>{this.state.hotelName}</b> on this background, and the said hotel desires to
                                    have services provided by
                                    Booking.support.
                                </label>
                            </div>
                            <div className={'form-label'}>
                                <label>
                                    Therefore, the parties agree as follows.
                                </label>
                            </div>
                            <div className={'form-label'}>
                                <b>
                                    1. DESCRIPTION OF SERVICES.
                                </b>
                            </div>
                            <div className={'form-label'}>
                                <label>
                                    Beginning on Date - {this.state.date} will provide the following services (collectively the
                                    "Services")
                                </label>
                            </div>
                            <div className={'form-label'}>
                                <b>
                                    2. PERFORMANCE OF SERVICES.
                                </b>
                            </div>
                            <div className={'form-label'}>
                                <ul>
                                    <li>
                                        <div>
                                            Booking support will manage the online extranet of booking.com so that the
                                            online booking
                                            from booking.com for the property gets streamlined. Booking support shall
                                            implement plans
                                            and strategies to help the hotel generate online bookings and online "good
                                            will".
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            Booking support shall act as a virtual receptionist exclusively for the guest
                                            that the
                                            hotel receives via the online travel agent (booking.com) Booking support is
                                            authorized by
                                            the hotel to take an advance of the total booking amount in order to confirm the
                                            booking from
                                            the guest on behalf of the hotel.
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            Booking support will work with the hotel staff to determine marketing strategies
                                            result in a
                                            positive online ranking and reviews.
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            Booking support shall do this at an agreed upon fee, through Booking Support
                                            endeavors.
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            This agreement can be dissolved by any party for any reason they seem worthy "as
                                            on where basis".
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            Booking support shall charge 25% (including GST)commission per booking for their
                                            services. The amount
                                            that you will get will be your net rate.
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className={'sign-section'}>
                                <div className={'owner-sign'}>
                                    <label>Ritik Panwar</label>
                                    <div>
                                        <header>Signature</header>
                                    </div>
                                    <div>
                                        <header>Ritik Panwar</header>
                                    </div>
                                    <div>
                                        <header>Head Onboarding Team</header>
                                    </div>
                                    <div>
                                        <header>BookingSupport.in</header>
                                    </div>
                                </div>
                                <div className={'host-sign'}>
                                    <div className={'digital-container'}>
                                        <SignatureCanvas penColor='black' canvasProps={{ className: 'sig-canvas' }} />
                                    </div>
                                    <div>
                                        <header>Signature (Draw your signature above)</header>
                                    </div>
                                    <div className={'owner-name-input'}>
                                        <input className={'hotel-input-tag'} type={'text'} placeholder={"Your Name *"} value={this.state.ownerName}
                                            onChange={(e) => this.setOwnerName(e.target.value)} />
                                    </div>
                                    <div>
                                        <header>Reservation Manager/Owner/GM</header>
                                    </div>
                                </div>
                            </div>
                            {this.state.errorMsg !== "" && (<div style={{ width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <label style={{width: '100%', color: 'red', fontWeight: 'bold' , justifyContent: 'center', alignItems: 'center'}}>{this.state.errorMsg}</label>
                            </div>)}
                            {this.state.isloading ? (
                                <div style={{ width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                    <Dots size={24} />
                                </div>
                            ) : (
                                <div className={'agreement-form-button-section'}>
                                    <button onClick={()=> {
                                        this.setState({errorMsg: ""})
                                            this.sendPDF();
                                    }} >Please Click here to sign</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;