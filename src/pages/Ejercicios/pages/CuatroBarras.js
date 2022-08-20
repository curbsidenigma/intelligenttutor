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
                    <div className='exercise-content'>
                        <div className='subtitle-box'>
                            <h2 className='subtitle'>Paso Uno: Diagrama o Boceto</h2>
                        </div>
                        <div className='parragraph-box'>
                            <p>Para comenzar, dibujaremos el diagrama de cuerpo libre. Haz clic en cualquier lugar del lienzo para dibujar los puntos que corresponden a las juntas del mecanismo. Una vez terminado el boceto haz clic en el botón Dibujar para unir los puntos y crear los eslabones. Puedes realizar el dibujo cuantas veces quieras, únicamente tienes que seleccionar el botón Reiniciar (ten en cuenta que esto hará que el ejercicio completo vuelva a comenzar).</p>
                        </div>
                        {/* Begin canvas */}
                        <div className='canvas-box'>
                            <svg className='canvas drop-shadow-md' width={700} height={400}>
                                <g>
                                    <rect
                                        width={700}
                                        height={400}
                                        rx={10}
                                        ry={10}
                                        fill={'white'}
                                        stroke={'white'}
                                        strokeWidth={1}
                                    />
                                </g>
                            </svg>
                        </div>
                        {/* End canvas */}
                    </div>
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