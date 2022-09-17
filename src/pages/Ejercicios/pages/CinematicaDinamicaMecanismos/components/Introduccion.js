import React from 'react'
import '../styles/introduccion.css'
import infoData from '../data/infoData'

const Introduccion = () => {
    return (
        <section>
            <div className='exercise-title-box'>
                <h2 className='exercise-subtitle'>Análisis y Simulación de Mecanismos </h2>
                <h1 className='exercise-title'>Cinemática y dinámica de mecanismos</h1>
            </div>
            <div className='content-info-box'>
                {infoData.map(data => (
                    <div className='content-info'>
                        <span className='info-icon'>
                            {data.icon}
                        </span>
                        <span className='info-text'>
                            {data.text}
                        </span>
                    </div>
                ))}
            </div>
            <div className='paragraph-box'>
                <p>Los mecanismos de cuatro barras están presentes en diversas áreas, desde máquinas complejas para transmitir potencia en ferrocarriles, hasta los mismos huesos del cuerpo humano. En esta sección aprenderemos a analizar el comportamiento de los mecanismos de cuatro barras; encontraremos las posiciones, velocidades y aceleraciones de sus componentes, así como las fuerzas que interactuan sobre ellos.</p>
            </div>
        </section>
    )
}

export default Introduccion