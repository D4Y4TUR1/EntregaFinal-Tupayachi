import React, {useEffect,useState}from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore,doc,getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [producto, setproducto] = useState([]);

    const {id} = useParams()

    useEffect(() =>{
        const db = getFirestore()

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
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer