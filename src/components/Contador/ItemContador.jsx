import React,{useState} from 'react';
import "./itemContador.css"

const ItemContador = ({inicial, stock, agregar}) => {

    //Estado del componente
    const [contador, setContador] = useState(1);
    
    const decrementar = () =>{
        if (contador > inicial){ 
            setContador(contador -1 )
        }
    }
    
    const agregarCarrito = () =>{
        agregar(contador)
    }

    const incrementar = () =>{
        if (contador < stock ){      
            setContador(contador +1 )
        }
    }

    return (
        <div>
            <section>
                <p>Cantidad: {contador}</p>
                <button onClick={decrementar} disabled={contador <= inicial} aria-label="Disminuir cantidad">-</button>
                <button onClick={agregarCarrito} aria-label="Agregar al carrito">Agregar al carrito</button>
                <button onClick={incrementar} disabled={contador >= stock} aria-label="Aumentar cantidad">+</button>
            </section>
        </div>
    )
}

export default ItemContador