import React, {useEffect, useState} from 'react'
import "./itemListContainer.css"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
    const [productos, setproductos] = useState([]);

    const {categoriaId} = useParams()

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const response = await fetch("/productos.json");
                const data = await response.json()

                if(categoriaId){
                    const filteredProductos = data.filter((p) => p.categoria == categoriaId);
                    setproductos(filteredProductos)
                }else{
                    setproductos(data)
                }

            } catch (error){
                console.log("Hubo un error en el fetch "+error)
            }
        }
        fetchData()
    },[categoriaId])

    return (
        <div className='itemListContainer'>
            
                <h1 className='bienvenida'>{greeting}</h1>
                
            
            { productos.length == 0 ? <h1>Cargando...</h1> : <ItemList productos={productos}/> }

        </div>
    )
}

export default ItemListContainer