import React from 'react'
import { Element } from 'react-scroll'
import '../styles/cuatroBarras.css'

const CuatroBarras = () => {
    return (
        <div className='cuatro-barras-content'>
            <div className='sidebar-content'>
                <div className='sidebar-box'>
                    <div className='sidebar-space'>
                    </div>
                    <div className='sidebar-content'>
                        <h1>Sidebar</h1>
                    </div>
                </div>
            </div>
            <div className='[display:table-cell] w-1/2 align-top'>
                <Element name='introduccion' className='element'>
                    <h1>Introduccion</h1>
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
            <div className='[display:table-cell] w-1/4 align-top'>
            </div>
        </div>
    )
}

export default CuatroBarras