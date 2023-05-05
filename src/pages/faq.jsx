import React from 'react';
import './style/faq.css';
import Logo from '../assets/faq.png';
import Icon from '../assets/iiicon.png';

const Faq = () => {
    return (
        <div className={'faq'}>
            <div className={'faq-introduction-div'}>
                <header className={'faq-introduction-div-header'}>Frequently Asked Questions</header>
                <div className={'faq-section'}>
                    <div className={'faq-introduction-div-description'}>
                        <label className={'faq-introduction-div-description-text'}>
                            You’re welcome to shoot us a question about anything at all. This FAQ
                            (Frequently Asked Questions) will help you find almost every answer you want
                            from us.
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
            <div className={'faq-question-section'}>
                <header className={'question-first-section'}>FAQ for Booking support.com services</header>
            </div>
        </div>
    )
}

export default Faq;