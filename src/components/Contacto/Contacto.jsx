import React from 'react';
import "./contacto.css";

const Contacto = () => {
    return (
        <div className='contenedorContacto'>
            <h1 className='tituloContacto'>Contáctanos</h1>
            <section className='sectionContac'>
                <p className='textoContacto'>¡Estamos emocionados de ayudarte en tu camino hacia una vida más saludable y activa! <br /> Si tienes alguna pregunta, comentario o simplemente quieres saludar, ¡no dudes en ponerte en contacto con nosotros!</p>
            </section>
            
            <h3 className='t3contacto'>Puedes buscarnos en la siguiente dirección:</h3>
            <address>
                <iframe 
                    className='iframeMapa'
                    title="Ubicación de Xtreme Workout Ancón"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.419160009542!2d-77.16440982537121!3d-11.80588898746179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d593b98f1c79%3A0xef55ccbe12c2817b!2sXTREME%20WORKOUT%20ANC%C3%93N!5e0!3m2!1ses-419!2spe!4v1710897278492!5m2!1ses-419!2spe"
                    width="800"
                    height="650"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </address>
        </div>
    );
}

export default Contacto;
