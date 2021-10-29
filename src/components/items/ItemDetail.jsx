import React from 'react'
import { ItemCount } from './ItemCount'

const ItemDetail = ({detail}) => {
    const handleClick = (total) => {
        alert (`La cantidad agregada es ${total}`)
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
            <p>Descripcion amplia del producto Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempora aspernatur perspiciatis animi laboriosam veritatis molestias, ad voluptatum hic doloribus deserunt dignissimos eius sunt asperiores et dolorum officia cupiditate laudantium.</p>
        </div>
    )
}

export default ItemDetail
