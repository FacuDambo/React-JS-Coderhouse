import React from 'react'
import { ItemCount } from './ItemCount'

function ItemListContainer({titulo}) {
    const handleClick = (total) => {
        alert (`La cantidad agregada es ${total}`)
    }
    
    return (
        <div className="card-style">
            <img src="https://picsum.photos/200" alt="" />
            <h3>{titulo}</h3>
            <ItemCount stock={5} initial= {1} onAdd={handleClick} />
        </div>
    )
}

export default ItemListContainer
