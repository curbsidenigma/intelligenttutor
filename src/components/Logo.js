import React from 'react'
import { Link } from 'react-router-dom'
import './components.css'

const Logo = () => {
    return (
        <div className='logo-box'>
            <Link to='/intelligenttutor/' className='logo'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_del_ITESM.svg' alt='Logo ITESM'></img>
                <div className='logo-text'>
                    <div className='logo-subtitle-text'>
                        <p>NOVUS</p>
                    </div>
                    <div className='logo-title-text'>
                        <p>Asesor Inteligente</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Logo