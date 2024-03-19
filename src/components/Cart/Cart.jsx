import React,{useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import "./cart.css"

const Cart = () => {

    const {cart,vaciarCarrito,eliminarItem,totalCarrito} = useContext(CartContext)

    return (
        <div className='ContenedorCart'>

            {cart.length == 0 ? 
            <>
            <h1>NO HAY PRODUCTOS EN EL CARRITO</h1>
            <Link to={"/"}>IR AL INICIO</Link>
            </>
                
                :

                <>

                <h1>Lista de su carrito</h1>

                {cart.map((p)=>(
                    <CartItem key={p.producto.id} producto={p} eliminarItem={eliminarItem}/>
                ))}
                <section className='contenedorCompra'>
                    <p>Total: S/. {totalCarrito()}</p>

                    <button className='botonCompra' onClick={vaciarCarrito}>Vaciar carrito</button>
                    <Link to={"/checkout"}>Completar Compra</Link>
                </section>
                
                </>
            } 
        </div>
    );
};

export default Cart;