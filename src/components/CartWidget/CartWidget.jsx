import React from 'react'
import {RiShoppingCart2Line} from 'react-icons/ri'
import { useCartContext } from '../../context/CartContext'


export default function CartWidget() {
    const {itemCantidad} = useCartContext ()
    return (
        <div className="cart-widget">
            <RiShoppingCart2Line  />
            <span className={
                itemCantidad > 0
                ? "carrito-badge"
                : "carrito-none"
            }>{itemCantidad}</span>
        </div>
        
    )
}
