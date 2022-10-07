import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CgMenu, CgClose } from "react-icons/cg"
import '../styles/header.css'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
    const [menu, setMenu] = useState(false)
    const [screen650, setScreen650] = useState(false)
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })
    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
            dimensions.width <= 650 ? setScreen650(true) : setScreen650(false)
        }
        window.addEventListener('resize', handleResize)
        return _ => {
          window.removeEventListener('resize', handleResize)
        }
    })
    
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
            <nav className='Header-nav'>
                <button className='Header-button' onClick={menuHandler}>
                    {!menu ? <>
                        <CgMenu /><span>Menu</span>
                    </> : <>
                        <CgClose /><span>Cerrar</span>
                    </>}
                </button>
                {!screen650 && <>
                    <Navbar />
                </>}
                {menu && <>
                    <Navbar />
                </>}
            </nav>
        </header>
    )
}

export default Header