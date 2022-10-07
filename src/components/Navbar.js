import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

const navbarDataLeft = [
    {
        id: 1,
        name: 'Lecciones',
        link: '/intelligenttutor/404/',
        class: 'Header-link'
    },
    {
        id: 2,
        name: 'Ejercicios',
        link: '/intelligenttutor/ejercicios/',
        class: 'Header-link'
    },
    {
        id: 3,
        name: 'Información',
        link: '/intelligenttutor/404/',
        class: 'Header-link'
    }
]

const navbarDataRight = [
    {
        id: 4,
        name: 'Ingresar',
        link: '/intelligenttutor/ingresar/',
        class: 'Header-link'
    },
    {
        id: 5,
        name: 'Registrarse',
        link: '/intelligenttutor/registrarse/',
        class: 'Header-Register-link'
    }
]

const Navbar = () => {
    return (
        <>
            {navbarDataLeft.map(element => (
                <Link key={element.id} to={element.link} className={element.class}>
                    {element.name}
                </Link>
            ))}
            <div className='Header-break'></div>
            {navbarDataRight.map(element => (
                <Link key={element.id} to={element.link} className={element.class}>
                    {element.name}
                </Link>
            ))}
        </>
    )
}

export default Navbar