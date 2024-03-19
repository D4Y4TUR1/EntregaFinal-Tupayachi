import React from 'react'
import "./item.css"
import { Link, NavLink } from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <Link to={`/detalle/${producto.id}`}>
            <div key={producto.id}  className='contenedorproductos'>
                <section className='productos'>
                    <section className='contenedorImg'>
                        <img className='imgproducto' src={producto.img} alt="imagen del producto" />
                    </section>
                    <h2>{producto.nombre}</h2>
                    <p>Precio online: S/. {producto.precio}</p>
                </section>         
            </div>
        </Link >
    )
}

export default Item