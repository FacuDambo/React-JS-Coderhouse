import {useState, useEffect} from 'react'
import { getFirestore } from '../../services/getFirestore'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router'
import Spinner from 'react-bootstrap/Spinner'

function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const { id } = useParams ()

    useEffect(() => {
        const dataBase = getFirestore()
        if (id) {
            const dataBaseQuery = dataBase.collection('productos').where('categoria', '==', id).get()
            dataBaseQuery
            .then( resp => setProductos( resp.docs.map( item => ({ id:item.id, ...item.data() }) )))
            .catch( error => alert(`Error: ${error}`))
            .finally(() => setCargando(false))
        } else{
            const dataBaseQuery = dataBase.collection('productos').orderBy('categoria').get()
            dataBaseQuery
            .then( resp => setProductos(resp.docs.map( item => ({ id:item.id, ...item.data() }) )))
            .catch( error => console.log(error))
            .finally(() => setCargando(false))
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <div className="item-list-container">
            {
                cargando 
                ? <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner> 
                : <ItemList product={productos}/>
            }
        </div>
    )
}

export default ItemListContainer
