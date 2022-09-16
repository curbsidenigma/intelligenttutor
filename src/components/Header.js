import React from 'react'
import '../styles/components.css'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header>
            <div className='header-box'>
                <div className='logo-box'>
                    <Logo />
                </div>
                <div className='navbar-box'>
                    <Navbar />
                </div>
            </div>
        </header>
    )
}

export default Header