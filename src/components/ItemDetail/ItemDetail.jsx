import React, { useState, useContext } from 'react';
import ItemContador from '../Contador/ItemContador';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import "./itemDetail.css";

const ItemDetail = ({ producto }) => {
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const { agregarAlCarrito } = useContext(CartContext);

    const agregar = (count) => {
        setIsAddedToCart(true);
        agregarAlCarrito(producto, count);
    };

    return (
        <div className='contenedorproductoDetalle'>
            <section className='productoDetalle'>
                <h1>{producto.nombre}</h1>
                <section className='contenedorImgDetalle'>
                    <img className='imgproductoDetalle' src={producto.img} alt={`Detalle de ${producto.nombre}`} />
                </section>
                <h3>Precio: S/. {producto.precio}</h3>
                <h3>Stock: {producto.stock}</h3>
                <p>{producto.descripcion}</p>
                {producto.stock === 0 ? (
                    <h2>Producto agotado</h2>
                ) : (
                    isAddedToCart ? <Link to='/cart'>Ir al carrito</Link> : <ItemContador inicial={1} stock={producto.stock} agregar={agregar} />
                )}
            </section>
        </div>
    );
};

export default ItemDetail;
