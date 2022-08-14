import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className='footer-box'>
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