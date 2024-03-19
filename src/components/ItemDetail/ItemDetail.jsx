import React,{useState, useContext} from 'react'
import ItemContador from '../Contador/ItemContador'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import "./itemDetail.css"
const ItemDetail = ({producto}) => {

    const [cart, setCart] = useState(false)

    const {agregarAlCarrito} = useContext(CartContext)

    const agregar =(count) => {
        setCart(true)
        agregarAlCarrito(producto, count)
        console.log(count)
    }

    return (
        <div className='contenedorproductoDetalle'>
            <section className='productoDetalle'>
                <h1>{producto.nombre}</h1>
                <section className='contenedorImgDetalle'>
                    <img className='imgproductoDetalle' src={producto.img} alt={producto.nombre} />
                </section>
                <h3>Precio: S/. {producto.precio}</h3>
                <h3>Stock: {producto.stock}</h3>
                <p> {producto.descripcion}</p>
                {producto.stock == 0 ? <h2>Producto agotado </h2> : (
                cart ?  <Link to='/cart'>Ir al carrito</Link> : <ItemContador inicial={1} stock={producto.stock} agregar={agregar}/> )}

                
            </section>
            
            
        </div>
    )
}

export default ItemDetail