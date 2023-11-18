import React from 'react';
import heroGrid from '../public/assets/photo-grid.png'

function Hero() {
    return (
        <div className='hero'>
            <img src={heroGrid} id='hero-img'/>
            <div className='hero-text'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activites led by one-of-a-kind hosts
                    all without leaving home.
                </p>
            </div>
        </div>
    )
}

export default Hero