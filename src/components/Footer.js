import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/footer.css'
import Logo from './Logo'

const navbarData = [
    {
        id: 1,
        name: 'Acerca de',
        link: '/intelligenttutor/404/'
    },
    {
        id: 2,
        name: 'Política de privacidad',
        link: '/intelligenttutor/404/'
    },
    {
        id: 3,
        name: 'Licencia',
        link: '/intelligenttutor/404/'
    },
    {
        id: 4,
        name: 'Contacto',
        link: '/intelligenttutor/404/'
    }
]

const Footer = () => {
    return (
        <footer className='Footer-footer'>
            <nav className='Footer-Big-nav'>
                <Link to='/intelligenttutor/' className='Footer-title'>
                    <Logo />
                </Link>
                <div className='Footer-break'></div>
                {navbarData.map(element => (
                    <Link key={element.id} to={element.link} className='Footer-link'>{element.name}</Link>
                ))}
            </nav>
            <div className='Footer-licence'>
                <div className='Footer-Licence-text'>
                    <div className='Footer-Licence-element'>
                        © 2022&nbsp;
                        <Link to='/intelligenttutor/' className="Footer-Licence-link">NOVUS Asesor Inteligente</Link>.&nbsp;
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer