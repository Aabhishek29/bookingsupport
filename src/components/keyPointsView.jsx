import React from "react";
import './style/KeyPointsView.css';
import Reception from '../assets/Reception.png';
import { GoPrimitiveDot } from 'react-icons/go';

const keyPointsView = () => {
    return(
        <div className={'key-point-view'}>
            <header className={'key-point-header'}>We Solve Booking issues for your</header>
            <div className={'key-point-div'}>
                <div className={'left-view'}>
                    <div className={'key-points'}>
                        <GoPrimitiveDot fontSize={24}/>
                        <label className={'key-point-text'}>First Point</label>
                    </div>
                    <div className={'key-points'}>
                        <GoPrimitiveDot fontSize={24}/>
                        <label className={'key-point-text'}>second Point</label>
                    </div>
                    <div className={'key-points'}>
                        <GoPrimitiveDot fontSize={24}/>
                        <label className={'key-point-text'}>Third Point</label>
                    </div>
                    <div className={'key-points'}>
                        <GoPrimitiveDot fontSize={24}/>
                        <label className={'key-point-text'}>Forth Point</label>
                    </div>
                    <div className={'key-points'}>
                        <GoPrimitiveDot fontSize={24}/>
                        <label className={'key-point-text'}>Fifth Point</label>
                    </div>
                </div>
                <div className={'right-view'}>
                    <img id={'reception-img'} src={Reception} alt={"Something went wrong"}/>
                </div>
            </div>
        </div>
    )
}

export default keyPointsView;