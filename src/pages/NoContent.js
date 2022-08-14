import React from 'react'
import '../styles/pages.css'

const NoContent = () => {
    return (
        <div className='no-content-box'>
            <div className='header-box'>
                <h2 className='header-subtitle'>NOVUS Asesor Inteligente</h2>
                <h1 className='header-title'>¡Vaya! No hay contenido</h1>
                <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">La página está en producción, espera un tiempo para poder acceder al material. Estamos haciendo lo posible por brindarte la mejor experiencia. ¡Gracias!</p>
            </div>
        </div>
    )
}

export default NoContent