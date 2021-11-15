import React from 'react'
import { useCartContext } from '../../context/CartContext'
import {RiDeleteBin5Line, RiDeleteBin2Line} from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cartList, removerItem, removerCarrito, cartTotal} = useCartContext()

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
                    <span className="carrito-total">Total: ${`${cartTotal}`}</span>
                    <span>Aca va la info del pago</span> 
                </div>
            </div>

            {cartList.length ? <button className='carrito-remover' onClick={() => removerCarrito()}><RiDeleteBin2Line /><span>Vaciar carrito</span></button>
            :
            <div className='container-carrito-vacio'>
                <p>¡El carrito está vacío!</p>
                <Link className='carrito-productos' to='/productos'>Iniciar compra</Link>
            </div>
            }
        </div>
        
    )
}

export default Cart
