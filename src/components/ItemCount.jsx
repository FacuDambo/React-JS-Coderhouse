import React, {useState} from 'react'


export function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial)

    const handleClickPlus = () => {
        count < stock ? setCount (count + 1) : alert ("Limite de stock")
    }
    
    const handleClickMinus = () => {
        count > 1 ? setCount (count - 1) : alert ('No se puede bajar de 1')
    }
    
    return (
        <div className='estiloContador'>
            <div className="contador">
                <button onClick={handleClickMinus}>-</button>
                <span>{count}</span>
                <button onClick={handleClickPlus}>+</button>
            </div>
            <button className="addCart" onClick={() => onAdd (count)}>Agregar al carrito</button>
        </div>
    )
}