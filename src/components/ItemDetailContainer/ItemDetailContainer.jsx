import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from 'react-bootstrap/Spinner' 
import { useParams } from 'react-router'
import {getFirestore} from '../../services/getFirestore'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)
    
    const {productId} = useParams ()

    useEffect(() => {
        const dataBase = getFirestore()
        const dataBaseQuery = dataBase.collection('productos').doc(productId).get()

        dataBaseQuery
        .then(item => setProducto({id:item.id, ...item.data()}))
        .catch(err => console.log("error"))
        .finally(()=> setCargando(false))

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
