import React from 'react'
import ItemListContainer from './ItemListContainer'

export default function CardContainer() {
    return (
        <div className='cardContainer'>      
            <ItemListContainer titulo="Nombre del producto" />
            <ItemListContainer titulo="Nombre del producto 2" />
            <ItemListContainer titulo="Nombre del producto 3" />
        </div>
    )
}
