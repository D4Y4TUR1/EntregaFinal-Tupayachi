import React, { useContext } from 'react';
import "./cardwidget.css";
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CardWidget = () => {
    const { cantidadCarrito } = useContext(CartContext);

    return (
        <>
            <Link to='/cart'>
                <img className='imgCarrito' src="/CarritoDeCompras.png" alt="Carrito de compras" />
            </Link>
            {cantidadCarrito() > 0 && (
                <p className='textoCarrito'>{cantidadCarrito()}</p>
            )}
        </>
    );
}

export default CardWidget;

