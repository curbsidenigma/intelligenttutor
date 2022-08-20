import React from 'react'
import '../styles/introduccion.css'
import { AiOutlineClockCircle, AiOutlineCalendar } from 'react-icons/ai'
import { BsPen, BsFileEarmarkCode } from 'react-icons/bs'

const Introduccion = () => {
    return (
        <div className='introduccion-content'>
            <div className='header-box'>
                <h2 className='header-subtitle'>Análisis y Simulación de Mecanismos </h2>
                <h1 className='header-title'>Mecanismos de Cuatro Barras</h1>
            </div>
            <div className='content-info-box'>
                <div className='content-info'>
                    <span className='info-icon'>
                        <AiOutlineCalendar/>
                    </span>
                    <span className='info-text'>
                        &nbsp;&nbsp;Publicado el 12 de agosto de 2022
                    </span>
                </div>
                <div className='content-info'>
                    <span className='info-icon'>
                        <AiOutlineClockCircle/>
                    </span>
                    <span className='info-text'>
                        &nbsp;&nbsp;Actualizado el 20 de agosto de 2022
                    </span>
                </div>
                <div className='content-info'>
                    <span className='info-icon'>
                        <BsPen/>
                    </span>
                    <span className='info-text'>
                        &nbsp;&nbsp;Ejercicio por Carlos R. Gijón
                    </span>
                </div>
                <div className='content-info'>
                    <span className='info-icon'>
                        <BsFileEarmarkCode/>
                    </span>
                    <span className='info-text'>
                        &nbsp;&nbsp;Adaptación por Gerardo Domínguez
                    </span>
                </div>
            </div>
            <div className='element-box'>
                <p className='text'>Los mecanismos de cuatro barras están presentes en diversas áreas, desde máquinas complejas para transmitir potencia en ferrocarriles, hasta los mismos huesos del cuerpo humano. En esta sección aprenderemos a analizar el comportamiento de los mecanismos de cuatro barras; encontraremos las posiciones, velocidades y aceleraciones de sus componentes, así como las fuerzas que interactuan sobre ellos.</p>
            </div>
        </div>
    )
}

export default Introduccion