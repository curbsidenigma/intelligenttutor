import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components.css'
import Logo from './Logo'

const Header = () => {
    return (
        <header>
            <div className='header-box'>
                <div className='logo-box'>
                    <Logo />
                </div>
                <div className='header-items'>
                    <nav>
                        <div className='nav-box'>
                            <Link to='/intelligenttutor/404/' className='header-breadcrumb'>
                                Lecciones
                            </Link>
                            <Link to='/intelligenttutor/ejercicios/' className='header-breadcrumb'>
                                Ejercicios
                            </Link>
                            <Link to='/intelligenttutor/404/' className='header-breadcrumb'>
                                Información
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
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header