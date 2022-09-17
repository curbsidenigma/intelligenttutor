import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components.css'
import navbarData from '../data/navbarData'

const Navbar = () => {
    return (
        <nav>
            <div className='nav-box'>
                {navbarData.map(data => (
                    <Link key={data.id} to={data.link} className='header-breadcrumb'>
                        {data.name}
                    </Link>
                ))}
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
    )
}

export default Navbar