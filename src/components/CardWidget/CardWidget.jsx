import React,{useContext} from 'react'
import "./cardwidget.css"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CardWidget = () => {

    const {cantidadCarrito,totalCarrito} = useContext(CartContext)

    return (
        <>
        <Link to='/cart'> <img className='imgCarrito' src="/CarritoDeCompras.png" alt="" /> </Link>

        <p className='textoCarrito'>{typeof cantidadCarrito() !== 'number' || cantidadCarrito() === 0 ? null : cantidadCarrito()}</p>
        </>

        
    )
}

export default CardWidget
