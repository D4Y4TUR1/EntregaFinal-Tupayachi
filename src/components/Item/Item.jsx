import React from 'react'
import "./item.css"
import { Link, NavLink } from 'react-router-dom'

const Item = ({producto, indice}) => {
    return (
        <Link to={`/detalle/${producto.id}`}>
            <div className='contenedorproductos' key={indice}>
                <section className='productos'>
                    <img className='imgproducto' src={producto.img} alt="imagen del producto" />
                    <h2>{producto.nombre}</h2>
                    <p>Precio online: S/. {producto.precio}</p>
                </section>         
            </div>
        </Link >
    )
}

export default Item