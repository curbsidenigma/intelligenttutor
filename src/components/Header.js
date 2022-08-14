import React from 'react'
import { Link } from 'react-router-dom'
import './components.css'

const Header = () => {
    return (
        <header>
            <div className='header-box'>
                <div className='header-items'>
                    <div className='logo-box'>
                        <Link to='/' className='logo'>
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
                    <nav className='nav-box'>
                        <div className='header-breadcrumb'>
                            <p>Lecciones</p>
                        </div>
                        <div className='header-breadcrumb'>
                            <p>Ejercicios</p>
                        </div>
                    </nav>
                    <div className='login-nav-box'>
                        <div className='login'>
                            Ingresar
                        </div>
                        <div className='register'>
                            Registrarse
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header