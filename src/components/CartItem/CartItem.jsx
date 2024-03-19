import React from 'react';
import "./cartItem.css"

const CartItem = ({producto,eliminarItem}) => {

    return (
        <div className='contenedorCarritoItem'>
            <section className='productoCarritoItem'>
                <h3>{producto.producto.nombre}</h3>
                <section className='contenedorimgItem'>
                    <img className='imgproductoCarritoItem' src={producto.producto.img} alt={producto.producto.nombre}/>
                </section>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Valor unitario: S/.{producto.producto.precio*producto.cantidad}</p>
                <button onClick={()=> eliminarItem(producto.producto.id)}>Eliminar producto</button>
            </section>

        </div>
    );
};

export default CartItem;