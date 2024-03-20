import React from 'react';
import "./cartItem.css";

const CartItem = ({ producto: { producto, cantidad }, eliminarItem }) => {
    const valorTotal = producto.precio * cantidad;

    return (
        <div className='contenedorCarritoItem'>
            <article className='productoCarritoItem'>
                <h3>{producto.nombre}</h3>
                <div className='contenedorimgItem'>
                    <img className='imgproductoCarritoItem' src={producto.img} alt={producto.nombre} />
                </div>
                <p>Cantidad: {cantidad}</p>
                <p>Valor unitario: S/.{valorTotal}</p>
                <button onClick={() => eliminarItem(producto.id)} aria-label={`Eliminar ${producto.nombre} del carrito`}>
                    Eliminar producto
                </button>
            </article>
        </div>
    );
};

export default CartItem;
