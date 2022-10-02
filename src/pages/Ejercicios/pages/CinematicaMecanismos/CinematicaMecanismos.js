import { React, useEffect, useState } from 'react'
import { Element } from 'react-scroll'
import { MathJax, MathJaxContext } from 'better-react-mathjax'
import { arc } from 'd3'
import styled from 'styled-components'
import './styles/cinematicaMecanismos.css'
import methods from './data/methods'
import config from './data/config'
import variablesData from './data/variablesData'
import postData from './data/postData'
import Sidebar from './components/Sidebar'
import Introduccion from './components/Introduccion'

const DynamicSidebar = styled.div`
    width: ${(props) => (props.activate ? "280px" : "0px")};
    padding: 2rem 1.5rem;
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    transition: width 0.1s;
`
const CinematicaMecanismos = () => {
    const post = postData
    const [points, setPoints] = useState(variablesData.pointsData)
    const [eventCounter, setEventCounter] = useState(0)
    const [animateSidebar, setAnimateSidebar] = useState(false)
    const [plot, setPlot] = useState(false)
    const [canvasButton, setCanvasButton] = useState(false)

    const [r, setR] = useState(variablesData.rData)
    const [theta, setTheta] = useState(variablesData.thetaData)
    const [omega, setOmega] = useState(variablesData.omegaData)
    const [alpha, setAlpha] = useState(variablesData.alphaData)

    const handleScroll = () => {
        setAnimateSidebar(window.pageYOffset >= 100 ? true : false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
    
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
        points.map((point, i) => 
            jsxData.push(
                point.flag && (
                    <g key={i}>
                        {point.img ? (
                            <foreignObject
                                x={point.x - 12}
                                y={point.y - 9}
                                width="25"
                                height="25"
                            >
                                <img src={require('./svg/fixed-rotary-joint.svg').default} alt='Fixed Rotary Joint'/>
                            </foreignObject>
                        ) : (<circle cx={point.x} cy={point.y} r={3} stroke='black' strokeWidth='2' fill='white'/>)}
                        <foreignObject
                            x={point.x - 10}
                            y={point.y + (i === 0 || i === 3 ? 15 : -35)}
                            width='100'
                            height='100'
                        >
                            <MathJaxContext
                                version={2}
                                config={config.mathJaxConfig}
                                onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
                            >
                                <MathJax dynamic>{`$${point.name}$`}</MathJax>
                            </MathJaxContext>
                        </foreignObject>
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

    const drawArc = () => {
        const Arc = arc()
            .innerRadius(25)
            .outerRadius(27)
            .startAngle(Math.PI / 2 - post.theta[1].magnitude)
            .endAngle(Math.PI / 2 - post.theta[0].magnitude)
        return (
            <g transform={`translate(${points[0].x}, ${points[0].y})`}>
                <path d={Arc()} />
                <foreignObject
                    x={Math.abs(50 * Math.cos(Math.PI / 4))}
                    y={-Math.abs(50 * Math.sin(Math.PI / 4))}
                    width="100"
                    height="100"
                >
                    <MathJaxContext
                        version={2}
                        config={config.mathJaxConfig}
                        onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
                    >
                        <MathJax dynamic>{`$\\theta_2$`}</MathJax>
                    </MathJaxContext>
                </foreignObject>
            </g>
        ) 
    }

    const drawArrows = () => {
        let jsxData = []
        for (let i = 0; i < 4; i++) {
            let j, k
            switch (i) {
                case 0:
                    j = 0
                    k = 1
                    break

                case 1:
                    j = 1
                    k = 2
                    break
                
                case 2:
                    j = 3
                    k = 2
                    break

                case 3:
                    j = 0
                    k = 3
                    break

                default:
                    break
            }
            jsxData.push(
                <g key={i}>
                    <defs>
                        <marker
                            id="arrow"
                            viewBox="0 -5 10 10"
                            refX="5"
                            refY="0"
                            markerWidth="4"
                            markerHeight="4"
                            orient="auto"
                        >
                            <path d="M0,-5L10,0L0,5"></path>
                        </marker>
                    </defs>
                    <line
                        x1={points[j].x}
                        y1={points[j].y}
                        x2={points[k].x}
                        y2={points[k].y}
                        stroke="black"
                        strokeWidth={2}
                        marker-end="url(#arrow)"
                    />
                </g>
            )
        }
        return jsxData
    }

    const drawAxis = () => {
        let jsxData = []
        for (let i = 0; i < 4; i++) {
            jsxData.push(
                <g key={i}>
                    <g transform={`translate(${points[0].x}, ${points[0].y})`}>
                        <line
                            x1={0}
                            y1={0}
                            x2={((i < 2) ? 1 : -1) * 1000}
                            y2={((i < 2) ? -1 : 1) * ((i < 1) ? ((points[0].y - points[3].y) / (points[3].x - points[0].x)) : Math.tan(post.theta[0].magnitude + Math.PI / 2 * i)) * 1000}
                            stroke="black"
                            strokeWidth={1}
                        />
                    </g>
                    {(i < 2) && (
                        <foreignObject
                            x={(i < 1) ? 675 : points[0].x + Math.tan(post.theta[0].magnitude + Math.PI / 2)}
                            y={(i < 1) ? points[0].y - Math.tan(post.theta[0].magnitude) * 400 : 5}
                            width='100'
                            height='100'
                        >
                            <MathJaxContext
                                version={2}
                                config={config.mathJaxConfig}
                                onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
                            >
                                <MathJax dynamic>{`$${(i < 1) ? 'x' : 'y'}$`}</MathJax>
                            </MathJaxContext>
                        </foreignObject>
                    )}
                </g>
            )
        }
        return jsxData
    }

    const sendData = () => {
        for (let i = 0; i < 4; i++) {
            let k
            i > 0 ? (k = i - 1) : (k = 3)
            post.r[i] = {
                ...post.r[i],
                magnitude: parseFloat(
                    (
                        Math.sqrt(
                            (points[i].x - points[k].x) ** 2 + (points[i].y - points[k].y) ** 2
                        ) / 100
                    ).toFixed(2)
                )
            }
            i > 0 ? (k = 1) : (k = 3)
            if (i < 2) {
                post.theta[i] = {
                    ...post.theta[i],
                    magnitude: parseFloat(
                        methods.fullRangeAtan(points[k].x - points[0].x, points[0].y - points[k].y).toFixed(2)
                    )
                }
            }
        }

        const route = 'intelligenttutor/api'
        const url = 'https://intelligenttutor-api.herokuapp.com/' + route
        // const url = 'http://127.0.0.1:5000/' + route
        fetch(url, {
            method: 'post',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        }).then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    setR(methods.fetchData(r, data.r))
                    setTheta(methods.fetchData(theta, data.theta))
                    setOmega(methods.fetchData(omega, data.omega))
                    setAlpha(methods.fetchData(alpha, data.alpha))
                })
            } else {
                console.log('Error 404: API not connected')
            }
        }).catch(function (error) {
            console.log('Error 404: API not connected')
        })
        setPlot(true)
        setCanvasButton(true)
    }

    const resetData = () => {
        setPoints(variablesData.pointsData)
        setPlot(false)
        setCanvasButton(false)
        setEventCounter(0)
        setR(variablesData.rData)
        setTheta(variablesData.thetaData)
        setOmega(variablesData.omegaData)
        setAlpha(variablesData.alphaData)
    }

    return (
        <main>
            <div className='main-content'>
                <Element name='introduccion' className='element'>
                    <Introduccion/>
                </Element>
                <Element name='paso-uno' className='element'>
                    <div className='section-content'>
                        <div className='subtitle-box'>
                            <h2 className='subtitle'>Paso Uno: Dibujar y Parafrasear el Problema</h2>
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
                        {(eventCounter === 4) && !canvasButton && (
                            <div className='button-box'>
                                <button 
                                    type='submit' 
                                    className='canvas-button focus:ring-2 focus:ring-offset-2 focus:ring-true-blue'
                                    onClick={sendData}
                                >
                                    Dibujar
                                </button>
                        </div>
                        )}
                        {(eventCounter > 0) && (
                            <div className='button-box'>
                                <button 
                                    type='submit' 
                                    className='canvas-button focus:ring-2 focus:ring-offset-2 focus:ring-true-blue'
                                    onClick={resetData}
                                >
                                    Reiniciar
                                </button>
                            </div>
                        )}
                    </div>
                </Element>
                <Element name='paso-dos' className='element'>
                    <div className='section-content'>
                        <div className='subtitle-box'>
                            <h2 className='subtitle'>Paso Dos: Identificar Teoría, Conceptos y Fórmulas</h2>
                        </div>
                        <div className='paragraph-box'>
                            <p>El <span id='concept'>eslabonamiento de cuatro barras</span> es el mecanismo articulado más simple posible para movimiento controlado con grado de libertad. Iniciaremos calculando el comportamiento cinemático del mecanismo, es decir, calcularemos su posición, velocidad y aceleración para un determinado momento.</p>
                        </div>
                        <div className='subsubtitle-box'>
                            <h3 className='subsubtitle'>Análisis de posición</h3>
                        </div>
                        <MathJaxContext
                                version={2}
                                config={config.mathJaxConfig}
                                onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
                        >
                            <div className='paragraph-box'>
                                <p>Para los mecanismos de cuatro barras se requiere sólo un parámetro para definir por completo las posiciones de todos los eslabones. El parámetro que elegiremos es el ángulo de eslabón de entrada que se representa como <MathJax inline>{'$\\theta_2$'}</MathJax>. Nuestro objetivo es hallar <MathJax inline>{'$\\theta_3$'}</MathJax> y <MathJax inline>{'$\\theta_4$'}</MathJax>, conociendo las longitudes de los eslabones del mecanismo (el que dibujaste anteriormente). Para ello, los eslabones se representan como vectores de posición:</p>
                            </div>
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
                                    {plot && drawArrows()}
                                    {plot && drawArc()}
                                    {plot && drawAxis()}
                                </svg>
                            </div>
                            <div className='paragraph-box'>
                                <p>Estas elecciones de las direcciones y sentidos de los vectores, indicados por sus puntas de flecha, conducen a esta ecuación de lazo vectorial</p>
                            </div>
                            <div className='equation-box'>
                                <p><MathJax inline>{'$\\mathbf{\\vec{R_2}} + \\mathbf{\\vec{R_3}} - \\mathbf{\\vec{R_1}} - \\mathbf{\\vec{R_4}} = 0$'}</MathJax>.</p>
                            </div>
                            <div className='paragraph-box'>
                                <p>A continuación, sustituimos la notación de número complejo para cada vector de posición. Y la ecuación se transforma en</p>
                            </div>
                            <div className='equation-box'>
                                <p><MathJax inline>{'$r_2e^{j\\theta_2} + r_3e^{j\\theta_3} - r_1e^{j\\theta_1} - r_4e^{j\\theta_4} = 0$'}</MathJax>,</p>
                            </div>
                            <div className='paragraph-box'>
                                <p>donde <MathJax inline>{'$r$'}</MathJax> es la magnitud del vector <MathJax inline>{'$\\mathbf{\\vec{R}}$'}</MathJax> y <MathJax inline>{'$\\theta$'}</MathJax> es su dirección. Para resolver la forma polar de la ecuación vectorial, debemos sustituir las equivalentes de Euler para los términos <MathJax inline>{'$e^{j\\theta}$'}</MathJax> de la siguiente forma:</p>
                            </div>
                            <div className='equation-box'>
                                <p><MathJax inline>{'$r_2\\left(\\mathrm{cos}\\theta_2 + j\\;\\mathrm{sen}\\theta_2\\right) + r_3\\left(\\mathrm{cos}\\theta_3 + j\\;\\mathrm{sen}\\theta_3\\right) - r_1\\left(\\mathrm{cos}\\theta_1 + j\\;\\mathrm{sen}\\theta_1\\right) - r_4\\left(\\mathrm{cos}\\theta_4 + j\\;\\mathrm{sen}\\theta_4\\right) = 0$'}</MathJax>.</p>
                            </div>
                            <div className='paragraph-box'>
                                <p>Esta ecuación ahora puede dividirse en sus partes real e imaginaria e igualamos cada una a cero, por lo que se obtiene para la parte real (componente en <MathJax inline>{'$x$'}</MathJax>):</p>
                            </div>
                            <div className='equation-box'>
                                <p><MathJax inline>{`$r_2\\;\\mathrm{cos}\\theta_2 + r_3\\;\\mathrm{cos}\\theta_3 - r_1\\;\\mathrm{cos}\\theta_1 - r_4\\;\\mathrm{cos}\\theta_4 = 0$`}</MathJax>,</p>
                            </div>
                            <div className='paragraph-box'>
                                <p>y para la parte imaginaria (componente en <MathJax inline>{'$y$'}</MathJax>):</p>
                            </div>
                            <div className='equation-box'>
                                <p><MathJax inline>{`$jr_2\\;\\mathrm{sen}\\theta_2 + jr_3\\;\\mathrm{sen}\\theta_3 - jr_1\\;\\mathrm{sen}\\theta_1 - jr_4\\;\\mathrm{sen}\\theta_4 = 0$`}</MathJax>.</p>
                            </div>
                            <div className='paragraph-box'>
                                <p>Ahora, si observas con detalle el dibujo de los vectores de posición podrás notar que el vector <MathJax inline>{'$r_1$'}</MathJax> tiene la misma dirección que el eje <MathJax inline>{'$x$'}</MathJax>, por lo que intuimos que <MathJax inline>{'$\\theta_1$'}</MathJax> es igual a cero. Así, si sabemos que <MathJax inline>{'$\\mathrm{cos}\\left(0°\\right) = 1$'}</MathJax>, que <MathJax inline>{'$\\mathrm{sen}\\left(0°\\right) = 0$'}</MathJax> y que las <MathJax inline>{'$j$'}</MathJax> se eliminan, obtenemos este sistema de ecuaciones para encontrar <MathJax inline>{'$\\theta_3$'}</MathJax> y <MathJax inline>{'$\\theta_4$'}</MathJax>:</p>
                            </div>
                            <div className='equation-box'>
                                <p><MathJax inline>{'$\\begin{cases} r_3\\;\\mathrm{cos}\\theta_3 - r_4\\;\\mathrm{cos}\\theta_4 = r_1 - r_2\\;\\mathrm{cos}\\theta_2 \\\\ r_3\\;\\mathrm{sen}\\theta_3 - r_4\\;\\mathrm{sen}\\theta_4 = - r_2\\;\\mathrm{sen}\\theta_2 \\end{cases}$'}</MathJax></p>
                            </div>
                        </MathJaxContext>
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
                        <div className='table-box'>
                            <div className='table-container shadow-md'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th scope='col'>
                                                Nombre de la variable
                                            </th>
                                            <th scope='col'>
                                                Representación
                                            </th>
                                            <th scope='col'>
                                                Símbolo
                                            </th>
                                            <th scope='col'>
                                                Valor
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <MathJaxContext
                                            version={2}
                                            config={config.mathJaxConfig}
                                            onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
                                        >
                                            {r.map((data, i) => (
                                                <tr key={i} className='border-b'>
                                                    <td>
                                                        {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
                                                    </td>
                                                    <td>
                                                        <MathJax inline dynamic>
                                                            {`$\\overline{${data.canvas}}$`}
                                                        </MathJax>
                                                    </td>
                                                    <td>
                                                        <MathJax inline dynamic>
                                                            {`$${data.mathJax}$`}
                                                        </MathJax>
                                                    </td>
                                                    <td>
                                                        <MathJax inline dynamic>
                                                            {`$${data.magnitude}\\;\\mathrm{m}$`}
                                                        </MathJax>
                                                    </td>
                                                </tr>
                                            ))}
                                            <tr className='border-b'>
                                                <td>
                                                    {theta[1].name.charAt(0).toUpperCase() + theta[1].name.slice(1)}
                                                </td>
                                                <td>
                                                    <MathJax inline dynamic>
                                                        {`$\\widehat{${theta[1].canvas}}$`}
                                                    </MathJax>
                                                </td>
                                                <td>
                                                    <MathJax inline dynamic>
                                                        {`$${theta[1].mathJax}$`}
                                                    </MathJax>
                                                </td>
                                                <td>
                                                    <MathJax inline dynamic>
                                                        {`$${methods.rad2deg(parseFloat(theta[1].magnitude)).toFixed(2)}°$`}
                                                    </MathJax>
                                                </td>
                                            </tr>
                                        </MathJaxContext>
                                    </tbody>
                                </table>
                            </div>
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
            <DynamicSidebar activate={animateSidebar}>
                <Sidebar/>
            </DynamicSidebar>
            {/* <div className='right-space'></div> */}
        </main>
    )
}

export default CinematicaMecanismos