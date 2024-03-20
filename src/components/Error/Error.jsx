import React from 'react'
import './error.css'
const Error = () => {
    return (
        <div className='contenedorPrincipalError'>
            <h1 className='tituloError'>ERROR!</h1>
            <section className='contenedorError'>
                <h2 className='mensaje'><br />"¡Zas!.Parece que has llegado a un callejón sin salida digital. <br />  <br />Regresa al camino principal y sigue navegando."<br /> </h2>
                <section className='contenedorImgError' >
                    <img className='imgError' src="./vegeta.gif" alt="" />
                </section>
            </section>
            
        </div>
    )
}

export default Error