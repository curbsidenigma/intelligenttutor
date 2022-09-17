import React from 'react'
import { Link } from 'react-scroll'
import sidebarData from '../data/sidebarData'
import '../styles/sidebar.css'

const Sidebar = () => {
    return (
        <aside aria-label='sidebar'>
            <div className='sidebar-box'>
                <ul className='space-y-2'>
                    {sidebarData.map((sidebarItem) => (
                        <li key={sidebarItem.id}>
                            <Link
                                className='sidebar-item'
                                activeClass='active-sidebar-item'
                                to={sidebarItem.path}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {sidebarItem.label}
                            </Link> 
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar