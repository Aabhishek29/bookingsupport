import React from "react";
import './style/KeyPointsView.css';
import Reception from '../assets/Reception.png';
import { FaHandPointRight } from 'react-icons/fa';

const keyPointsView = () => {
    return(
        <div className={'key-point-view'}>
            <header className={'key-point-header'}>We Solve Booking issues for your</header>
            <div className={'key-point-div'}>
                <div className={'right-view-mobile'}>
                    <img id={'reception-img-mobile'} src={Reception} alt={"Something went wrong"}/>
                </div>
                <div className={'left-view'}>
                    <div className={'key-points'}>
                        <FaHandPointRight fontSize={18} color="#1773fc"/>
                        <label className={'key-point-text'}>Guest not coming to the property.</label>
                    </div>
                    <div className={'key-points'}>
                        <FaHandPointRight fontSize={18} color="#1773fc"/>
                        <label className={'key-point-text'}>Digital payment facilities available.</label>
                    </div>
                    <div className={'key-points'}>
                        <FaHandPointRight fontSize={18} color="#1773fc"/>
                        <label className={'key-point-text'}>Full time customer support available</label>
                    </div>
                    <div className={'key-points'}>
                        <FaHandPointRight fontSize={18} color="#1773fc"/>
                        <label className={'key-point-text'}>Try to make as much profit for you as we can</label>
                    </div>
                    <div className={'key-points'}>
                        <FaHandPointRight fontSize={18} color="#1773fc" />
                        <label className={'key-point-text'}>24x7 Management support available.</label>
                    </div>
                </div>
                <div className={'right-view-pc'}>
                    <img id={'reception-img'} src={Reception} alt={"Something went wrong"}/>
                </div>
            </div>
        </div>
    )
}

export default keyPointsView;