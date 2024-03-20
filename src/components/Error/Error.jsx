import React from 'react'
import './error.css'

const Error = () => {
    return (
        <main className='contenedorPrincipalError'>
            <h1 className='tituloError'>¡ERROR!</h1>
            <article className='contenedorError'>
                <p className='mensaje'>
                    "¡Zas! Parece que has llegado a un callejón sin salida digital.
                    Regresa al camino principal y sigue navegando."
                </p>
                <div className='contenedorImgError'>
                    <img className='imgError' src="./vegeta.gif" alt="Vegeta sorprendido" />
                </div>
            </article>
        </main>
    )
}

export default Error;
