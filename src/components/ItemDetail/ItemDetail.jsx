import React from 'react'
import ItemContador from '../Contador/ItemContador'

const ItemDetail = ({producto}) => {
    return (
        <div>
            <h1>{producto.nombre}</h1>
            <img src={producto.img} alt={producto.nombre} />
            <h3>{producto.precio}</h3>
            <h3>{producto.stock}</h3>
            <p>{producto.descripcion}</p>
            <ItemContador inicial={1} stock={producto.stock}/>
        </div>
    )
}

export default ItemDetail