import React from 'react'
import "./item.css"

const Item = ({producto, indice}) => {
    return (
        <div className='contenedorproductos' key={indice}>
            <section className='productos'>
                <img className='imgproducto' src={producto.img} alt="imagen del producto" />
                <h2>{producto.nombre}</h2>
                <p>Precio online: {producto.precio}</p>
            </section>
            
        </div>
    )
}

export default Item