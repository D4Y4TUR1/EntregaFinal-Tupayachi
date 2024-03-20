import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import "./cart.css";

const Cart = () => {
    const { cart, vaciarCarrito, eliminarItem, totalCarrito } = useContext(CartContext);

    return (
        <div className='ContenedorCart'>
            {cart.length === 0 ? (
                <div>
                    <h1>Tu carrito está vacío</h1>
                    <img className='carritoVacio' src="./CarritoVacio-removebg-preview.png" alt="Carrito vacío" />
                    <Link to="/">IR AL INICIO</Link>
                </div>
            ) : (
                <div>
                    <h1>Lista de su carrito</h1>
                    {cart.map((item) => (
                        <CartItem key={item.producto.id} producto={item} eliminarItem={eliminarItem} />
                    ))}
                    <section className='contenedorCompra'>
                        <p><strong>Total: S/. {totalCarrito()}</strong></p>
                        <button className='botonCompra' onClick={vaciarCarrito}>Vaciar carrito</button>
                        <Link to="/checkout">Completar Compra</Link>
                    </section>
                </div>
            )}
        </div>
    );
};

export default Cart;
