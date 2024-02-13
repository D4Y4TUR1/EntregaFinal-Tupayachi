import React,{useState} from 'react';

const ItemContador = ({inicial, stock}) => {

    //Estado del componente
    const [contador, setContador] = useState(1);
    
    const decrementar = () =>{
        if (contador > inicial){ 
            setContador(contador -1 )
        }
    }
    
    const agregarCarrito = () =>{
        alert('Agregaste ' + contador + ' producto(s)');
    }

    const incrementar = () =>{
        if (contador < stock ){      //Hay en stock 100 
            setContador(contador +1 )
        }
    }

    return (
        <div>
            <p>Cantidad: {contador}</p>
            <button onClick={decrementar}>-</button>
            <button onClick={agregarCarrito}>Agregar al carrito</button>
            <button onClick={incrementar}>+</button>
        </div>
    )
}

export default ItemContador