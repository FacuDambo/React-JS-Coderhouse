import React, {useState, useEffect} from 'react'
import { getItem } from '../../services/getProducts'
import ItemDetail from './ItemDetail'
import Spinner from 'react-bootstrap/Spinner' 


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        getItem
        .then(res => { setProducto(res) })
        .catch(err => console.log(err))
        .finally(() => setCargando(false))

    }, [])
    
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
