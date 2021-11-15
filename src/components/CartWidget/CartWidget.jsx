import React from 'react'
import {RiShoppingCart2Line} from 'react-icons/ri'
import { useCartContext } from '../../context/CartContext'


export default function CartWidget() {
    const {itemCantidad} = useCartContext ()
    return (
        <div>
            <RiShoppingCart2Line className="cart-widget" />
            <span className={
                itemCantidad > 0
                ? "carrito-badge"
                : "carrito-none"
            }>{itemCantidad}</span>
        </div>
        
    )
}
