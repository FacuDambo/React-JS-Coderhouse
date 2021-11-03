import React, {useState, useEffect} from 'react'
import {Item} from '../Item/Item'
import Spinner from 'react-bootstrap/Spinner'
import { getProducts } from '../../services/getProducts.js'
import { useParams } from 'react-router'

export const ItemList = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const { id } = useParams ()

    useEffect(() => {
        if (id) {
            getProducts
            .then(res => { 
                console.log(res);
                setProductos(res.filter(prod => prod.categoria === id)) 
            })
            .catch(err => console.log(err))
            .finally(() => setCargando(false))
        } else {
            getProducts
            .then(res => { setProductos(res) })
            .catch(err => console.log(err))
            .finally(() => setCargando(false))
        }
    }, [id])

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
