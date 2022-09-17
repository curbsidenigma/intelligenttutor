import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/logo.css'

const Logo = () => {
    return (
        <Link to='/intelligenttutor/' className='logo'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_del_ITESM.svg' alt='Logo ITESM'></img>
            <div className='logo-text'>
                <div className='logo-subtitle-text'>
                    <p id='logo-subtitle'>NOVUS</p>
                </div>
                <div className='logo-title-text'>
                    <p id='logo-title'>Asesor Inteligente</p>
                </div>
            </div>
        </Link>
    )
}

export default Logo