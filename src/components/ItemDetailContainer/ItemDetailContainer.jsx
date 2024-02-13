import React, {useEffect,useState}from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
const ItemDetailContainer = ({id}) => {
    const [producto, setproducto] = useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const response = await fetch("./productos.json");
                const data = await response.json()
                const product = data.find((p)=>p.id == id)
                setproducto(product)
            } catch (error){
                console.log("Hubo un error en el fetch "+error)
            }
        }
        fetchData()
    },[id])

    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer