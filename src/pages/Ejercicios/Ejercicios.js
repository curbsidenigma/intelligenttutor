import React from 'react'
import { Link } from 'react-router-dom'
import './styles/ejercicios.css'
import topicGridData from './data/topicGridData'

const Ejercicios = () => {
    return (
        <>
            <section className='section'>
                <div className='section-wrapper'>
                    <div>
                        <div className='exercises-title-box'>
                            <h2 className='exercises-header-subtitle'>NOVUS Asesor Inteligente</h2>
                            <h1 className='exercises-header-title'>Ejercicios</h1>
                        </div>
                        <div className='topic-grid'>
                            {topicGridData.map(data => (
                                <div key={data.id} className='topic-card'>
                                    <Link to={data.link}>
                                        <img src={data.img} alt={data.alt}/>
                                        <h3 className='topic-title'>
                                            {data.title}
                                        </h3>
                                        <h4 className='exercise-title'>
                                            {data.subtitle}
                                        </h4>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ejercicios