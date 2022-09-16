import React from 'react'
import { Link } from 'react-router-dom'
import './components.css'
import Logo from './Logo'

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
                    <Logo />
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