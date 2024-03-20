import React, {useEffect,useState}from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc,getDoc} from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {
    const [producto, setproducto] = useState([]);

    const {id} = useParams()

    useEffect(() =>{

        const nuevoDoc = doc(db,"Productos-XW",id)

        getDoc(nuevoDoc)
        .then(res => {
            const data = res.data()
            const nuevoProducto = {id: res.id,...data}
            setproducto(nuevoProducto)
        })
        .catch(error => console.log(error))
    },[])

    return (
        <div>
            { producto.length == 0 
            ? 
            <h1>Cargando producto...</h1> 
            : 
            <ItemDetail producto={producto}/> }
        </div>
    )
}

export default ItemDetailContainer