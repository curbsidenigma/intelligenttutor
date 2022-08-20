import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ejercicios.css'

const Ejercicios = () => {
    return (
        <div className='exercises-content'>
            <div className='exercises-header-box'>
                <h2 className='exercises-header-subtitle'>NOVUS Asesor Inteligente</h2>
                <h1 className='exercises-header-title'>Ejercicios</h1>
                <p className='exercises-slogan'>En esta sección se presentan ejercicios interactivos para ayudar al alumno a reforzar los conocimientos aprendidos en las lecciones.</p>
            </div>
            <div className='exercises-grid-container'>
                <div className='grid-container'>
                    <div className='group relative'>
                        <div className='grid-element group-hover:opacity-75'>
                            <img src='https://cdn.stocksnap.io/img-thumbs/960w/still-items_LCLKTHHCMX.jpg' alt='Mecanismos de cuatro barras'/>
                        </div>
                        <h3 className='subject-title'>
                            <Link to='/intelligenttutor/ejercicios/cinematica-mecanica-mecanismos/'>
                                <span className='absolute inset-0'></span>
                                Análisis y Simulación de Mecanismos
                            </Link>
                        </h3>
                        <p className='exercise-title'>Mecanismos de cuatro barras</p>
                    </div>
                    <div className='group relative gap-x-12'>
                        <div className='grid-element group-hover:opacity-75'>
                            <img src='https://cdn.stocksnap.io/img-thumbs/960w/metal-tools_VEFWNXZWZY.jpg' alt='Concepto de esfuerzo'/>
                        </div>
                        <h3 className='subject-title'>
                            <Link to='/intelligenttutor/404/'>
                                <span className='absolute inset-0'></span>
                                Mecánica de materiales
                            </Link>
                        </h3>
                        <p className='exercise-title'>Concepto de esfuerzo</p>
                    </div>
                    <div className='group relative gap-x-12'>
                        <div className='grid-element group-hover:opacity-75'>
                            <img src='https://cdn.stocksnap.io/img-thumbs/960w/steel-industry_1PR1SGKS69.jpg' alt='Procesos de manufactura'/>
                        </div>
                        <h3 className='subject-title'>
                            <Link to='/intelligenttutor/404/'>
                                <span className='absolute inset-0'></span>
                                Procesos de manufactura
                            </Link>
                        </h3>
                        <p className='exercise-title'>Fundición</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ejercicios