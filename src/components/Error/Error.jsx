import React from 'react'
import './error.css'
const Error = () => {
    return (
        <div className='contenedorPrincipalError'>
            <h1 className='tituloError'>ERROR!</h1>
            <section className='contenedorError'>
                <h2 className='mensaje'>"¡Zas!.Parece que has llegado a un callejón sin salida digital. Regresa al camino principal y sigue navegando."</h2>
                <section className='contenedorImgError' >
                    <img className='imgError' src="./tristeza-error.png" alt="" />
                </section>
            </section>
            
        </div>
    )
}

export default Error