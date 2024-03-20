import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
    return (
        <article className='contenedorproductos' key={producto.id}>
            <section className='productos'>
                <Link to={`/detalle/${producto.id}`} aria-label={`Ver detalles de ${producto.nombre}`}>
                    <div className='contenedorImg'>
                        <img className='imgproducto' src={producto.img} alt={`Imagen de ${producto.nombre}`} />
                    </div>
                    <h2 className='nombreProducto'>{producto.nombre}</h2>
                </Link>
                <p>Precio online: S/. {producto.precio}</p>
            </section>         
        </article>
    )
}

export default Item;
