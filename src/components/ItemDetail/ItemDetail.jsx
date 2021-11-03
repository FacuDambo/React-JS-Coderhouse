import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'

const ItemDetail = ({detail}) => {
    const handleClick = (total) => {
        alert (`Cantidad de productos agregada: ${total}`)
    }
    
    return (
        <div className="itemDetail">
            <div className="cardDetail">
                <img src={detail.img} alt="img" />
                <div className="detailSide">
                    <h3>{detail.nombre}</h3>
                    <span>{detail.precio}</span>
                    <p>Stock disponible {detail.stock}</p>
                    <ItemCount stock={detail.stock} initial= {1} onAdd={handleClick}/>
                </div>
            </div>
            <p>{detail.descripcion}</p>
        </div>
    )
}

export default ItemDetail
