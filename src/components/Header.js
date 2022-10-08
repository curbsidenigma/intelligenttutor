import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { CgMenu, CgClose } from "react-icons/cg"
import '../styles/header.css'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
    const [menu, setMenu] = useState(false)
    
    const menuHandler = () => {
        setMenu(!menu)
    }

    return (
        <header className='Header-header'>
            <div className='Header-background'>
            </div>
            <Link to='/intelligenttutor/' className='Header-title'>
                <Logo />
            </Link>
            <nav className='Header-Big-nav'>
                <Navbar />
            </nav>
            <nav className='Header-Small-nav'>
                <button className='Header-button' onClick={menuHandler}>
                    {!menu ? <>
                        <CgMenu /><span>Menu</span>
                    </> : <>
                        <CgClose /><span>Cerrar</span>
                    </>}
                </button>
                {menu && <Navbar />}
            </nav>
        </header>
    )
}

export default Header