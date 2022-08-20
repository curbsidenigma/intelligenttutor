import React from 'react'
import { Element } from 'react-scroll'
import '../styles/cuatroBarras.css'
import Sidebar from './CuatroBarras/components/Sidebar'
import Introduccion from './CuatroBarras/components/Introduccion'

const CuatroBarras = () => {
    return (
        <div className='cuatro-barras-content'>
            <div className='sidebar-content'>
                <div className='sidebar-box'>
                    <div className='sidebar-space'>
                    </div>
                    <div className='sidebar-content'>
                        <Sidebar/>
                    </div>
                </div>
            </div>
            <div className='main-content'>
                <Element name='introduccion' className='element'>
                    <Introduccion/>
                </Element>
                <Element name='paso-uno' className='element'>
                    <h1>Paso Uno</h1>
                </Element>
                <Element name='paso-dos' className='element'>
                    <h1>Paso Dos</h1>
                </Element>
                <Element name='paso-tres' className='element'>
                    <h1>Paso Tres</h1>
                </Element>
                <Element name='paso-cuatro' className='element'>
                    <h1>Paso Cuatro</h1>
                </Element>
            </div>
            <div className='cuatro-barras-space'>
            </div>
        </div>
    )
}

export default CuatroBarras