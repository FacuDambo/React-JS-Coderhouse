import React from 'react'
import { ItemCount } from '../items/ItemCount'

export const Item = ({detail}) => {
    const handleClick = (total) => {
        alert (`La cantidad agregada es ${total}`)
    }

    return (
        <div key= {detail.id} className="card-style">
            <img src={detail.img} alt="" />
            <h3>{detail.nombre}</h3>
            <span>${detail.precio}</span>
            <span>{detail.descripcion}</span>
            <ItemCount stock={detail.stock} initial= {1} onAdd={handleClick} />
        </div>
    )
}
