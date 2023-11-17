import React from 'react';
import star from '../assets/star.png'

function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className='card'>
           {badgeText && <div className='card-badge'>{badgeText}</div>}
            <img src={`./src/assets/${props.item.coverImg}`} className='card-photo'/>
            <div className='card-details'>
                <div className='card-rating-info'>
                    <img src={star} id='card-star'/>
                    <p className='card-rating'>{props.item.rating}</p>
                    <p className='card-rating-count-and-location'>({props.item.reviewCount})
                     &bull; {props.item.location}</p>
                </div>
                <p>{props.item.title}</p>
                <p><b>From ${props.item.price}</b> / person</p>
            </div>

        </div>
    )
}

export default Card