import { React, useState } from 'react'
import { Element } from 'react-scroll'
import '../styles/cinematicaDinamicaMecanismos.css'
import variablesData from './CinematicaDinamicaMecanismos/data/variablesData'
import Sidebar from './CinematicaDinamicaMecanismos/components/Sidebar'
import Introduccion from './CinematicaDinamicaMecanismos/components/Introduccion'

const CinematicaDinamicaMecanismos = () => {
    const [points, setPoints] = useState(variablesData.pointsData)
    const [eventCounter, setEventCounter] = useState(0)
    const [plot, setPlot] = useState(false)

    const handleClick = (event) => {
        if (eventCounter < 4) {
            const dim = event.target.getBoundingClientRect();
            setPoints(
                points.map((object) =>
                    object.id === eventCounter + 1
                    ? {
                      ...object,
                      flag: true,
                      x: event.clientX - dim.left,
                      y: event.clientY - dim.top
                    } : object
                )
            )
            setEventCounter(eventCounter + 1);
        }
    }

    const drawPoints = () => {
        let jsxData = []
        points.map((point, id) => 
            jsxData.push(
                point.flag && (
                    <g key={id}>
                        <circle cx={point.x} cy={point.y} r={3} stroke='black' stroke-width='2' fill='white'/>
                    </g>
                )
            )
        )
        return jsxData
    }

    const drawLines = () => {
        let jsxData = []
        for (let i = 0; i < 4; i++) {
            let k
            (i > 0) ? k = i - 1 : k = 3
            jsxData.push(
                <line
                    key={i}
                    x1={points[i].x}
                    y1={points[i].y}
                    x2={points[k].x}
                    y2={points[k].y}
                    stroke="black"
                    strokeWidth={2}
                />
            )
        }
        return jsxData
    }

    const plotData = () => {
        setPlot(true)
    }

    const resetData = () => {
        setPoints(variablesData.pointsData)
        setEventCounter(0)
        setPlot(false)
    }

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
                    <div className='section-content'>
                        <div className='subtitle-box'>
                            <h2 className='subtitle'>Paso Uno: Dibujar y parafrasear el problema</h2>
                        </div>
                        <div className='paragraph-box'>
                            <p>Para comenzar, dibujaremos el diagrama de cuerpo libre. Haz clic en cualquier lugar del lienzo para dibujar los puntos que corresponden a las juntas del mecanismo. Una vez terminado el boceto haz clic en el botón Dibujar para unir los puntos y crear los eslabones. Puedes realizar el dibujo cuantas veces quieras, únicamente tienes que seleccionar el botón Reiniciar (ten en cuenta que esto hará que el ejercicio completo vuelva a comenzar).</p>
                        </div>
                        {/* Begin canvas */}
                        <div className='canvas-box'>
                            <svg className='canvas drop-shadow-md' width={700} height={400} onClick={handleClick}>
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
                                    {plot && drawLines()}
                                    {drawPoints()}
                                </g>
                            </svg>
                        </div>
                        {/* End canvas */}
                        <div className='button-box'>
                            <button 
                                type='submit' 
                                className='canvas-button focus:ring-2 focus:ring-offset-2 focus:ring-true-blue'
                                onClick={plotData}
                            >
                                Dibujar
                            </button>
                        </div>
                        <div className='button-box'>
                            <button 
                                type='submit' 
                                className='canvas-button focus:ring-2 focus:ring-offset-2 focus:ring-true-blue'
                                onClick={resetData}
                            >
                                Reiniciar
                            </button>
                        </div>
                    </div>
                </Element>
                <Element name='paso-dos' className='element'>
                    <div className='section-content'>
                        <div className='subtitle-box'>
                            <h2 className='subtitle'>Paso Dos: Identificar Teoría, Conceptos y Fórmulas</h2>
                        </div>
                        <div className='paragraph-box'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a tincidunt est, nec sollicitudin dui. Pellentesque auctor tellus eu ipsum tempus efficitur. Cras varius augue sit amet ipsum dapibus dictum. Vestibulum dapibus sit amet arcu sit amet fermentum. Maecenas consectetur risus sit amet velit congue, vel blandit dui ornare.</p>
                        </div>
                    </div>
                </Element>
                <Element name='paso-tres' className='element'>
                    <div className='section-content'>
                        <div className='subtitle-box'>
                            <h2 className='subtitle'>Paso Tres: Documentar la Información Necesaria</h2>
                        </div>
                        <div className='paragraph-box'>
                            <p>Una vez realizado el dibujo y revisado la teoría, es importante identificar las variables correspondientes al boceto dibujado en el primer paso. Estas son la longitud de cada uno de los eslabones y el ángulo de entrada que se mide con respecto a la tierra, o mejor conocida como bancada. Todos estos datos se muestran en la siguiente tabla.</p>
                        </div>
                    </div>
                </Element>
                <Element name='paso-cuatro' className='element'>
                    <div className='section-content'>
                        <div className='subtitle-box'>
                            <h2 className='subtitle'>Paso Cuatro: Resolver, Analizar y Verificar</h2>
                        </div>
                        <div className='paragraph-box'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a tincidunt est, nec sollicitudin dui. Pellentesque auctor tellus eu ipsum tempus efficitur. Cras varius augue sit amet ipsum dapibus dictum. Vestibulum dapibus sit amet arcu sit amet fermentum. Maecenas consectetur risus sit amet velit congue, vel blandit dui ornare.</p>
                        </div>
                    </div>
                </Element>
            </div>
            <div className='cuatro-barras-space'>
            </div>
        </div>
    )
}

export default CinematicaDinamicaMecanismos