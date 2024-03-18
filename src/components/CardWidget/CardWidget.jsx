import React,{useContext} from 'react'
import "./cardwidget.css"
import { CartContext } from '../../context/CartContext'
const CardWidget = () => {

    const {totalCantidad} = useContext(CartContext)

    return (
        <>
        <img className='imgCarrito' src="/CarritoDeCompras.png" alt="" />

        <p>{totalCantidad == 0 ? null : totalCantidad}</p>       
        </>

        
    )
}

export default CardWidget
