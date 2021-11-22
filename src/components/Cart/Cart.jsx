import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import {RiDeleteBin5Line, RiDeleteBin2Line} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import {getFirestore} from '../../services/getFirestore'
import firebase from 'firebase';
import 'firebase/firestore';
import UserForm from '../UserForm/UserForm'

const Cart = () => {
    const [orderId, setOrderId] = useState("");
    const {cartList, removerItem, removerCarrito, cartTotal, userData} = useCartContext()

    const createOrder = (e) => {
        e.preventDefault()

        let order ={}
        order.date = firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer = userData;
        order.total = cartTotal;
        order.items = cartList.map(itemAgregado => {
            const id = itemAgregado.detail.id;
            const nombre = itemAgregado.detail.nombre;
            const cantidad = itemAgregado.cantidad;
            const subtotal = itemAgregado.detail.precio * itemAgregado.cantidad;
            return {id, nombre, cantidad, subtotal}
        })

        const dataBase = getFirestore()
        dataBase.collection("orders").add(order)
        .then(res => setOrderId(res.id))
        .catch(err => alert('Error:', err))
        .finally(() => removerCarrito())

        const updatStock = dataBase.collection("productos").where
        (firebase.firestore.FieldPath.documentId(), "in", cartList.map(item => item.detail.id))

        const batch = dataBase.batch()

        updatStock.get()
        .then(res => {
            res.docs.forEach(docSnap => {
                batch.update(docSnap.ref, {
                    stock: docSnap.data().stock - cartList.find(item => item.detail.id === docSnap.id).cantidad
                })
            })

            batch.commit()
            .catch (err => alert("Error:", err))
        })
    }

    return (
        <div className="carrito-body">
            <div className={cartList.length ? "carrito-main" : "carrito-vacio"}>
                <div className="carrito">
                    <div className="carrito-titulos">
                        <p>Imagen</p>
                        <p>Nombre</p>
                        <p>Descripción</p>
                        <p>Cantidad</p>
                        <p>Precio</p>
                        <p>Subtotal</p>
                        <p></p>
                    </div>

                    {cartList.map(item => 
                    <div key={item.detail.id} className="carrito-card">
                        <div className="carrito-detalles">
                            <img src={item.detail.img} alt="img del producto" className="carrito-img" />
                            <span>{item.detail.nombre}</span>
                            <span>{item.detail.minDescripcion}</span>
                            <span>{item.cantidad}</span>
                            <span>${item.detail.precio}</span>
                            <span>${item.cantidad * item.detail.precio}</span>
                            <button onClick={() => removerItem(item.detail.id)}><RiDeleteBin5Line/></button>
                        </div>
                    </div>
                    )}
                </div>

                <div className="carrito-pago">
                    <UserForm createOrder={createOrder}/>
                    <span className="carrito-total">Total: ${`${cartTotal}`}</span>
                </div>
            </div>

            {cartList.length 
            ? <button className='carrito-remover' onClick={() => removerCarrito()}><RiDeleteBin2Line /><span>Vaciar carrito</span></button>
            : orderId === ""
                ?   <div className='container-carrito-vacio'>
                        <p>¡El carrito está vacío!</p>
                        <Link className='carrito-productos' to='/productos'>Iniciar compra</Link>
                    </div>
                :   <div className='container-carrito-vacio'>
                        <p>¡Gracias por tu compra!</p>
                        <span>Codigo de operación: {orderId}</span>
                        <Link to="/">Volver al inicio</Link>
                    </div>
            }
        </div>
        
    )
}

export default Cart