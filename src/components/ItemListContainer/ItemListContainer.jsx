import React, {useEffect, useState} from 'react'
import "./itemListContainer.css"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection,getDocs,query,where } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListContainer = ({greeting}) => {
    const [productos,setProductos] = useState([]);

    const {categoriaId} = useParams()

    useEffect(()=>{

        const misProductos = 
        categoriaId ? 
        query(collection(db,"Productos-XW"),where("categoria","==",categoriaId))
        :
        collection(db,"Productos-XW")

        getDocs(misProductos)
        .then((res) => {
            const nuevosProductos = res.docs.map((doc) => {
                const data = doc.data()
                return {id: doc.id,...data}
            })
            setProductos(nuevosProductos)
        })
        .catch((error) => console.log(error))

    },[categoriaId])


    return (
        <div className='itemListContainer'>
            
            <h1 className='bienvenida'>{greeting}</h1>
                
            
            { productos.length == 0 
            ? 
            <h1>Cargando...</h1> 
            :
            <ItemList productos={productos}/> }

        </div>
    )
}

export default ItemListContainer