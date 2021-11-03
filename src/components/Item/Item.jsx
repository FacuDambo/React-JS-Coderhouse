import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({detail}) => {

    return (
        <div key= {detail.id} className="item">
            <span className="item-span-categoria">{detail.categoria}</span>
                <div className="item-detail">
                    <img src={detail.img} alt="Imagen del producto" />
                    <h3 className="item-span-nombre">{detail.nombre}</h3>
                    <span className="item-span-descripcion">{detail.descripcion}</span>
                    <span className="item-span-precio">${detail.precio}</span>
                </div>
                <Link to={`/producto/${detail.id}`}>
                    <button className="item-button">DETALLE DEL PRODUCTO</button>
                </Link>
        </div>

    )
}