import React from 'react'

export const Item = ({detail}) => {

    return (
        <div key= {detail.id} className="card-style">
            <img src={detail.img} alt="" />
            <h3>{detail.nombre}</h3>
            <span>${detail.precio}</span>
            <span>{detail.descripcion}</span>
            <button className="botonDetalle">Detalle del producto</button>
        </div>
    )
}
