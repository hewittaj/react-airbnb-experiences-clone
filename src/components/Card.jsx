import React from 'react';
import katie from '../assets/katie-zaferes.png'
import star from '../assets/star.png'

function Card() {
    return (
        <div className='card'>
            <img src={katie} className='card-photo'/>
            <div className='card-details'>
                <div className='card-rating-info'>
                    <img src={star} id='card-star'/>
                    <p className='card-rating'>5.0</p>
                    <p className='card-rating-count-and-location'>(6) &bull; USA</p>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><b>From $136</b> / person</p>
            </div>

        </div>
    )
}

export default Card