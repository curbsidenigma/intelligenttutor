import React from 'react'
import '../styles/logo.css'

const Logo = () => {
    return (
        <>
            <img src='https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_del_ITESM.svg' alt='Logo ITESM' className='Logo-logo'></img>
            <div className='Logo-text'>
                <div className='Logo-subtitle'>
                    <p id='Logo-Subtitle-text'>NOVUS</p>
                </div>
                <div className='Logo-title'>
                    <p id='Logo-Title-text'>Asesor Inteligente</p>
                </div>
            </div>
        </>
    )
}

export default Logo