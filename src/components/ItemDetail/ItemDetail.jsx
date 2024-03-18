import React,{useState, useContext} from 'react'
import ItemContador from '../Contador/ItemContador'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({producto}) => {

    const [cart, setCart] = useState(false)

    const {agregarAlCarrito} = useContext(CartContext)

    const agregar =(count) => {
        setCart(true)
        agregarAlCarrito(producto, count)
        console.log(count)
    }

    return (
        <div>
            <h1>{producto.nombre}</h1>
            <img src={producto.img} alt={producto.nombre} />
            <h3>{producto.precio}</h3>
            <h3>{producto.stock}</h3>
            <p>{producto.descripcion}</p>
            {cart ?  <Link to='/cart'>Ir al carrito</Link> : <ItemContador inicial={1} stock={producto.stock} agregar={agregar}/> }
            
        </div>
    )
}

export default ItemDetail