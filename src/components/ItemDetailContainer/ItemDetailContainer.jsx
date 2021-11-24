import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router'
import {getFirestore} from '../../services/getFirestore'
import Loader from '../Loader/Loader'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(true)
    
    const {productId} = useParams ()

    useEffect(() => {
        const dataBase = getFirestore()
        const dataBaseQuery = dataBase.collection('productos').doc(productId).get()

        dataBaseQuery
        .then(item => setProducto({id:item.id, ...item.data()}))
        .catch(err => console.log("error", err))
        .finally(()=> setCargando(false))
    }, [productId])
    
    return (
        <div className="itemListContainer">
            {
                cargando 
                ? <Loader />
                : <ItemDetail detail={producto}/>
            }
        </div>
    )
}

export default ItemDetailContainer
