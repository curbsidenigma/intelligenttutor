import React from 'react'
import '../styles/burger.css'
import { IoIosClose } from "react-icons/io";

const OriginalBurger = () => {
    return(
        <div className='burger-box'>
            <div className='burger-content shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='burger-top'>
                    <div className='burger-header'>
                        <div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_del_ITESM.svg' alt='Logo ITESM'></img>
                        </div>
                        <div>
                            <button className='close-button'>
                                <IoIosClose size={40}/>
                            </button>
                        </div>
                    </div>
                    <nav className='burger-top-nav'>
                        <div className='anchor'>
                            <span class="sidebar-item">Lecciones</span>
                        </div>
                        <div className='anchor'>
                            <span class="sidebar-item">Ejercicios</span>
                        </div>
                        <div className='anchor'>
                            <span class="sidebar-item">Información</span>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default OriginalBurger