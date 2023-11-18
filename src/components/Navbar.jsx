import React from 'react';
import airbnbLogo from '../public/assets/airbnb-logo.png'

function Navbar() {
    return (
        <nav className='navbar'>
            <img src={airbnbLogo} id='navbar-logo'/>
        </nav>
    )
}

export default Navbar