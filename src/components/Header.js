import React from 'react'
import { Link } from 'react-router-dom'
import './components.css'

const Header = () => {
    return (
        <header>
            <div className='header-box'>
                <div className='header-items'>
                    <nav className='nav-box'>
                        <Link to='/intelligenttutor/404/' className='header-breadcrumb'>
                            Lecciones
                        </Link>
                        <Link to='/intelligenttutor/ejercicios/' className='header-breadcrumb'>
                            Ejercicios
                        </Link>
                        <Link to='/intelligenttutor/404/' className='header-breadcrumb'>
                            Información
                        </Link>
                    </nav>
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
                    <div className='login-nav-box'>
                        <Link to='/intelligenttutor/ingresar/' className='login'>
                            Ingresar
                        </Link>
                        <Link to='/intelligenttutor/registrarse' className='register'>
                            Registrarse
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header