import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'
import Logo from './Logo'

const Footer = () => {
    return (
        <footer>
            <div className='footer-box'>
                <div className='logo-footer-box'>
                    <Logo />
                </div>
                <ul className='footer-items'>
                    <li>
                        <Link to='/intelligenttutor/404/' className='footer-breadcrumb'>Acerca de</Link>
                    </li>
                    <li>
                        <Link to='/intelligenttutor/404/' className='footer-breadcrumb'>Política de privacidad</Link>
                    </li>
                    <li>
                        <Link to='/intelligenttutor/404/' className='footer-breadcrumb'>Licencia</Link>
                    </li>
                    <li>
                        <Link to='/intelligenttutor/404/' className='hover:underline'>Contacto</Link>
                    </li>
                </ul>
            </div>
            <div className='license-block'>
                <span className='license'>
                    © 2022 <Link to="/" className="hover:underline">NOVUS Asesor Inteligente</Link>. Todos los Derechos Reservados.
                </span>
            </div>
        </footer>
    )
}

export default Footer