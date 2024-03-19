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
                <button onClick={decrementar}>-</button>
                <button onClick={agregarCarrito}>Agregar al carrito</button>
                <button onClick={incrementar}>+</button>
            </section>
        </div>
    )
}

export default ItemContador