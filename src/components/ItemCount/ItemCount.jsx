import React, {useState} from 'react'


export function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial)

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
    
    return (
        <div className='item-count-style'>
            <div className="item-count">
                <button onClick={handleClickMinus}>-</button>
                <span>{count}</span>
                <button onClick={handleClickPlus}>+</button>
            </div>
            <button className="addCart" onClick={() => onAdd (count)}>Agregar al carrito</button>
        </div>
    )
}