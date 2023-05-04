import React from 'react';
import './style/cardView.css';

const CardView = ({description, owner}) => {
    return (
        <div className={'card'}>
            <div>
                <header className={'card-description'}>"{description}"</header>
            </div>
            <div>
                <header className={'card-owner'}>{owner}</header>
            </div>
        </div>
    )
}

export default CardView;