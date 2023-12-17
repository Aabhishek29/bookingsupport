import React from 'react'
import {FaHandPointRight} from "react-icons/fa";
import './style/BulletPointsView.css';

const BulletPointsView = () => {
    return(
        <div className={'bullet-points'}>
            <div className={'bullet-points-section'}>
                <div className={'bullet-points-section-header'}>
                    <header>Getting simple facilities for you </header>
                </div>
                <div className={'bullet-points-list'}>
                    <div className={'bullet-points-list-container'}>
                        <div className={'bullet-points-list-point'}>
                            <FaHandPointRight fontSize={18} color="#1773fc"/>
                            <label className={'bullet-points-list-text'}>Start your journey with <span style={{color: 'blue', fontWeight: '500'}}>Bookingsupport.in</span> today</label>
                        </div>
                        <div className={'bullet-points-list-point'}>
                            <FaHandPointRight fontSize={18} color="#1773fc"/>
                            <label className={'bullet-points-list-text'}>Onboard is Free</label>
                        </div>
                        <div className={'bullet-points-list-point'}>
                            <FaHandPointRight fontSize={18} color="#1773fc"/>
                            <label className={'bullet-points-list-text'}>We have professional managing team with us</label>
                        </div>
                    </div>
                    <div className={'bullet-points-list-container'}>
                        <div className={'bullet-points-list-point'}>
                            <FaHandPointRight fontSize={18} color="#1773fc"/>
                            <label className={'bullet-points-list-text'}>Join us and get more and more bookings</label>
                        </div>
                        <div className={'bullet-points-list-point'}>
                            <FaHandPointRight fontSize={18} color="#1773fc"/>
                            <label className={'bullet-points-list-text'}>Get your hotel revenue Increased</label>
                        </div>
                        <div className={'bullet-points-list-point'}>
                            <FaHandPointRight fontSize={18} color="#1773fc"/>
                            <label className={'bullet-points-list-text'}>Get your peace of mind as we are working for you</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BulletPointsView;