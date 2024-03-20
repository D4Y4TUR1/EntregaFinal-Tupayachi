import React, { useContext, useState } from 'react';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/config';
import "./Checkout.css";

const Checkout = () => {
    const { cart, totalCarrito, vaciarCarrito } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const manejadorFormulario = async (event) => {
        event.preventDefault();
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Completar los campos requeridos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los emails no coinciden");
            return;
        }

        const ordenXW = {
            items: cart.map(({ producto, cantidad }) => ({
                id: producto.id,
                nombre: producto.nombre,
                cantidad
            })),
            total: totalCarrito(),
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        try {
            await Promise.all(ordenXW.items.map(async ({ id, cantidad }) => {
                const productoRef = doc(db, "Productos-XW", id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, { stock: stockActual - cantidad });
            }));

            const docRef = await addDoc(collection(db, "Ordenes-XW"), ordenXW);
            setOrdenId(docRef.id);
            vaciarCarrito();
        } catch (error) {
            console.error(error);
            setError("Error procesando la orden. Por favor, intente de nuevo.");
        }
    };

    return (
        <div className='contenedor-principal'>
            <div className="contenedor">
                <h1 className="titulo">Ingresa tus datos</h1>
                <form className="formulario" onSubmit={manejadorFormulario}>
                    <section className="seccion-carrito">
                        {cart.map((producto) => (
                            <div key={producto.producto.id} className="item-carrito">
                                <p>{producto.producto.nombre} <br /> ({producto.cantidad} unidades)</p>
                                <div className='contenedorimgCheckout'>
                                    <img className='imgproductoCheckout' src={producto.producto.img} alt={producto.producto.nombre}/>
                                </div>
                                <p>Cantidad: {producto.cantidad}</p>
                                <p>Valor unitario: S/.{producto.producto.precio * producto.cantidad}</p> 
                            </div>
                        ))}
                        {totalCarrito() !== 0 && <p className='txtTotal'>Total: S/. {totalCarrito()}</p>}
                    </section>

                    <section className="seccion-datos-usuario">
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

                        </div>
                    </section>
                    {error && <p className="error">{error}</p>}
                    {ordenId && <strong className="confirmacion">¡Gracias por tu compra! Tu número de orden es: {ordenId}</strong>}
                    <section>
                        <img className='imgGymAnime' src="./muscle.png" alt="Gym anime" />
                    </section>
                </form>
            </div>
        </div>

    );
};

export default Checkout;