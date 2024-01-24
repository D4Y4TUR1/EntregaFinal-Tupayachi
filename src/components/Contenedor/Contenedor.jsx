import React from "react";
import "./contenedor.css"

const Contenedor = ({producto, precio, stock}) => {

    return(
        <div className="contenedorproductos">
            <div className="productos">
                <h2>{producto}</h2>
                <p>Precio = S/ {precio}</p>
                <p>Stock = {stock} unidades</p>
            </div>
            
        </div>
        
    )
}

export default Contenedor;