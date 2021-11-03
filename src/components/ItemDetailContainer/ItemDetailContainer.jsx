import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from 'react-bootstrap/Spinner' 
import { useParams } from 'react-router'
import getProductsDetail from '../../services/getProductsDetail'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)
    const {productId} = useParams ()

    useEffect(() => {
        getProductsDetail
        .then(res => { 
            console.log(res);
            setProducto(res.find(prod => prod.id === productId))
        })
        .catch(err => console.log(err))
        .finally(() => setCargando(false))
    }, [productId])
    
    return (
        <div className="itemListContainer">
            {
                cargando 
                ? <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner> 
                : <ItemDetail detail={producto}/>
            }
        </div>
    )
}

export default ItemDetailContainer
