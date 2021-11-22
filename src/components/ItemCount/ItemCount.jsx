import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {RiShoppingBagLine, RiShoppingCartFill, RiShoppingBasket2Line} from 'react-icons/ri'

export function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(false)

    const handleClickPlus = () => {
        const newValue = count + 1
        if (newValue <= stock) {
            setCount(newValue)
        }
    }
    
    const handleClickMinus = () => {
        const newValue = count - 1
        if (initial <= newValue) {
            setCount(newValue)
        }
    }

    const handleOnAdd = () => {
        onAdd (count)
        setCount (initial)
        setCambiarBoton (true)
    }
    
    return (
        <div className='item-count-style'>
            <div className="item-count">
                <button onClick={handleClickMinus} disabled={count === 1}>-</button>
                <span>{count}</span>
                <button onClick={handleClickPlus} disabled={count === stock}>+</button>
            </div>
            { cambiarBoton ? 
                <div className="item-count-btn">
                    <Link to="/carrito">
                        <button className="addCart"><RiShoppingCartFill/>Terminar Compra</button>
                    </Link>
                    <Link to="/productos">
                        <button className="addCart"><RiShoppingBasket2Line/>Seguir comprando</button>
                    </Link>
                </div>
                : 
                <button className="addCart" onClick={ handleOnAdd }><RiShoppingBagLine/>Agregar al carrito</button>
            }
        </div>
    )
}