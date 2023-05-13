import React from 'react';
import './style/joinUsBoard.css';
import {Link} from "react-router-dom";

const JoinUsBoard = ({context}) => {
    return(
        <div className={'join-us-section'}>
            <div className={'join-us-board'}>
                <div className={'join-us-text-section'}>
                    <header className={'join-us-header'}>{context}</header>
                </div>
                <div className={'join-us-button-section'}>
                    <Link className={'join-us-button'} to={'/form'}>Join Now</Link>
                </div>
            </div>
        </div>
    )
}

export default JoinUsBoard;