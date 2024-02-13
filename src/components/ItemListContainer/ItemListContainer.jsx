import React, {useEffect, useState} from 'react'
import "./itemListContainer.css"
import ItemList from '../ItemList/ItemList';
const ItemListContainer = ({greeting}) => {
    const [productos, setproductos] = useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const response = await fetch("./productos.json");
                const data = await response.json()
                setproductos(data)
            } catch (error){
                console.log("Hubo un error en el fetch "+error)
            }
        }
        fetchData()
    },[]);

    return (
        <div className='itemListContainer'>
            
                <h1 className='bienvenida'>{greeting}</h1>
                
            
            { productos.length == 0 ? <h1>Cargando...</h1> : <ItemList productos={productos}/> }

        </div>
    )
}

export default ItemListContainer