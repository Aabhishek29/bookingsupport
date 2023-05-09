import React from 'react';
import Icon from "../assets/iiicon.png";
import Logo from "../assets/faq.png";

const About = () => {
    return (
        <div className={'about'}>
            <div className={'faq-introduction-div'}>
                <header className={'faq-introduction-div-header'}>About Us</header>
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
        </div>
    )
}

export default About;