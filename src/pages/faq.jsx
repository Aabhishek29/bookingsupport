import React from 'react';
import './style/faq.css';
import Logo from '../assets/faq.png';
import Icon from '../assets/iiicon.png';
import companyData from "./companyData.json";
import QuestionView from "../components/QuestionView";

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
                <div>
                    <header className={'question-first-section'}>FAQ for Booking support.com services</header>
                    <div>
                        {companyData.questionQuery.map((data) => {
                            return(
                                <div style={{
                                    marginTop: 50,
                                }}>
                                    <QuestionView question={data.question} answer={data.answer}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div style={{
                    marginTop: 50
                }}>
                    <header className={'question-first-section'}>FAQs for online travel agency management services</header>
                    <div>
                        {companyData.questionQuery.map((data) => {
                            return(
                                <div style={{
                                    marginTop: 50,
                                }}>
                                    <QuestionView question={data.question} answer={data.answer}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;