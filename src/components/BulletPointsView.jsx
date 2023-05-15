import React from 'react'
import {FaHandPointRight} from "react-icons/fa";
import './style/BulletPointsView.css';

const BulletPointsView = () => {
    return(
        <div className={'bullet-points'}>
            <div className={'bullet-points-section'}>
                <div className={'bullet-points-section-header'}>
                    <header>Getting simple facilities for you and this is some text come here </header>
                </div>
                <div className={'bullet-points-list'}>
                    <div className={'bullet-points-list-container'}>
                        <div className={'bullet-points-list-point'}>
                            <FaHandPointRight fontSize={24} color="#1773fc"/>
                            <label className={'bullet-points-list-text'}>First Point</label>
                        </div>
                        <div className={'bullet-points-list-point'}>
                            <FaHandPointRight fontSize={24} color="#1773fc"/>
                            <label className={'bullet-points-list-text'}>First Point</label>
                        </div>
                        <div className={'bullet-points-list-point'}>
                            <FaHandPointRight fontSize={24} color="#1773fc"/>
                            <label className={'bullet-points-list-text'}>First Point</label>
                        </div>
                    </div>
                    <div className={'bullet-points-list-container'}>
                        <div className={'bullet-points-list-point'}>
                            <FaHandPointRight fontSize={24} color="#1773fc"/>
                            <label className={'bullet-points-list-text'}>First Point</label>
                        </div>
                        <div className={'bullet-points-list-point'}>
                            <FaHandPointRight fontSize={24} color="#1773fc"/>
                            <label className={'bullet-points-list-text'}>First Point</label>
                        </div>
                        <div className={'bullet-points-list-point'}>
                            <FaHandPointRight fontSize={24} color="#1773fc"/>
                            <label className={'bullet-points-list-text'}>First Point</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BulletPointsView;