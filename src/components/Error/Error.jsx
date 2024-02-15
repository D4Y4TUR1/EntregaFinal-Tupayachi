import React from 'react'
import './error.css'
const Error = () => {
    return (
        <div>
            <h1 className='tituloError'>ERROR!</h1>
            <section className='contenedorError'>
                <img className='imgError' src="./tristeza-error.png" alt="" />
                <h2 className='mensaje'>No hemos encontrado la página que estás buscando...</h2>
            </section>
            
        </div>
    )
}

export default Error