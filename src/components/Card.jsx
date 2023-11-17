import React from 'react';
import star from '../assets/star.png'

function Card(props) {
    return (
        <div className='card'>
            <img src={`./src/assets/${props.img}`} className='card-photo'/>
            <div className='card-details'>
                <div className='card-rating-info'>
                    <img src={star} id='card-star'/>
                    <p className='card-rating'>{props.rating}</p>
                    <p className='card-rating-count-and-location'>({props.reviewCount})
                     &bull; {props.location}</p>
                </div>
                <p>{props.title}</p>
                <p><b>From ${props.price}</b> / person</p>
            </div>

        </div>
    )
}

export default Card