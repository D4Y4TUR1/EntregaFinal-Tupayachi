import React, {useContext, useState} from 'react';
import { collection,addDoc,updateDoc,doc,getDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/config';
import "./Checkout.css"
import Cart from '../Cart/Cart';
const Checkout = () => {

    //INFORMACIÓN DEL CONTEXT
    const {cart,totalCarrito,cantidadCarrito,vaciarCarrito} = useContext(CartContext)

    //DATOS DEL COMPONENT
    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [telefono,setTelefono] = useState("")
    const [email,setEmail] = useState("")
    const [emailConfirmacion,setEmailConfirmacion] = useState("")
    const [error,setError] = useState("")
    const [ordenId,setOrdenId] = useState("")

    //SUBMIT
    const manejadorFormulario = (event) => {

        //EVITAMOS QUE SE EJECUTE EL EVENTO POR DEFECTO DEL SUBMIT
        event.preventDefault()

        //ALGUNOS MANEJOS DE ERRORES
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Completar los campos requeridos")
            return;
        }

        if(email !== emailConfirmacion) {
            setError("Los campos del email no coinciden")
            return;
        }

        //GENERAMOS EL OBJETO DE LA ORDEN DE COMPRA
        const ordenXW = {
            items: cart.map((producto) => ({
                id: producto.producto.id,
                nombre: producto.producto.nombre,
                cantidad: producto.cantidad
            })),
            total: totalCarrito(),
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        //GENERAMOS LA LÓGICA PARA LA ÓRDEN Y REDUCCIÓN DEL STOCK
        Promise.all(
            ordenXW.items.map(async (productoOrden) => {
                const productoRef = doc(db,"Productos-XW",productoOrden.id);
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
        .then(() => {
            addDoc(collection(db,"ordenes-XW"),ordenXW)
            .then((docRef) => {
                setError("")
                setOrdenId(docRef.id)
                vaciarCarrito()
            })
            .catch((error) => {
                console.log(error)
                setError("Se produjo un error al crear la orden")
            })

        })
        .catch((error) => {
            console.log(error)
            setError("No se puede actualizar el stock del producto")
        })
    }



    return (
        <div className='.contenedor-principal'>
            <div className="contenedor">

                <h1 className="titulo">Ingresa tus datos</h1>

                    <form className="formulario" onSubmit={manejadorFormulario}>
                        <section className="seccion-carrito">
                            {/* MAPEO DE PRODUCTOS */}
                            {cart.map((producto) => (
                                <div key={producto.producto.id} className="item-carrito">
                                    <p>
                                        {""}
                                        {producto.producto.nombre} <br /> ({producto.cantidad}  unidades)
                                        
                                    </p>
                                    <section className='contenedorimgCheckout'>
                                        <img className='imgproductoChechout' src={producto.producto.img} alt={producto.producto.nombre}/>
                                    </section>
                                    <p>Cantidad: {producto.cantidad}</p>
                                    <p>Valor unitario: S/.{producto.producto.precio*producto.cantidad}</p> 
                                </div>
                                
                            ))}
                            {totalCarrito() !== 0 ? <p className='txtTotal'>Total: S/. {totalCarrito()}</p> : null}
                            
                        </section>

                        <section className="seccion-datos-usuario">
                            {/* CAMPOS DEL FORMULARIO */}
                            <div className="campos-formulario">
                                <div className="campo-formulario">
                                    <label htmlFor="Nombre">Nombre: </label>
                                    <input className="entrada" name="Nombre" type='text' onChange={(e) => setNombre(e.target.value)} required />
                                </div>

                                <div className="campo-formulario">
                                    <label htmlFor="Apellido">Apellido: </label>
                                    <input className="entrada" name="Apellido" type='text' onChange={(e) => setApellido(e.target.value)} required />
                                </div>

                                <div className="campo-formulario">
                                    <label htmlFor="Teléfono">Teléfono: </label>
                                    <input className="entrada" name="Teléfono" type='tel' onChange={(e) => setTelefono(e.target.value)} pattern="[0-9]{9}" required />
                                </div>

                                <div className="campo-formulario">
                                    <label htmlFor="Email">Email: </label>
                                    <input className="entrada" name="Email" type='email' onChange={(e) => setEmail(e.target.value)} required />
                                </div>

                                <div className="campo-formulario">
                                    <label htmlFor="Email_Confirmacion">Repetir Email: </label>
                                    <input className="entrada" name="EmailConfirmacion" type='email' onChange={(e) => setEmailConfirmacion(e.target.value)} required />
                                </div>

                                <button className="boton-enviar" type='submit'>Completar compra</button>

                                {error && <p className="error">{error}</p>}

                                {ordenId && (
                                    <strong className="confirmacion">
                                        ¡Gracias por tu compra! Tu número de orden es: {ordenId}
                                    </strong>
                                )}

                            </div>
                        </section>

                        <section>
                            <img className='imgGymAnime' src="./muscle.png" alt="Gym-anime" />
                        </section>
                    </form>
            </div>
        </div>
    );
};

export default Checkout;