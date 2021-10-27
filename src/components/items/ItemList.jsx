import React, {useState, useEffect} from 'react'
import {Item} from './Item'
import Spinner from 'react-bootstrap/Spinner'
import { getProducts } from '../../services/getProducts.js'

export const ItemList = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        getProducts
        .then(res => { setProductos(res) })
        .catch(err => console.log(err))
        .finally(() => setCargando(false))

    }, [])

    return (
        <div className="itemList">
            {
                cargando 
                ? <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner> 
                : productos.map(prod => <Item key={prod.id} detail={prod} />)
            }
        </div>
    )
}
