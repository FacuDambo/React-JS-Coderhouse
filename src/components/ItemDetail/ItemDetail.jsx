import {useState} from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import Carousel from 'react-bootstrap/Carousel'
import { useCartContext } from '../../context/CartContext'

const ItemDetail = ({detail}) => {
    const [count, setCount] = useState(1)

    const {cartList, mostrarListado, agregarAlCarrito} = useCartContext()
    /* console.log(cartList);
    console.log(mostrarListado); */

    const onAdd = (total) => {
        setCount(total)
        agregarAlCarrito({detail, cantidad: total})
    }
    console.log(cartList);

    return (
        <div className="item-detail">
            <div className="card-detail">
                <Carousel indicators={false} slide={false} variant="dark" pause="hover">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={detail.img}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={detail.img2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={detail.img3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className="detail-info">
                    <div className="detail-nombre-info">
                        <div>
                            <h2 className="detail-nombre">{detail.nombre}</h2>
                            <span className="detail-categoria">{detail.categoria}</span>
                        </div>
                        <h4 className="min-des">{detail.minDescripcion}</h4>
                    </div>
                    <div className="detail-descripcion">
                        <h3 className="dd-titulo">INFO DEL PRODUCTO</h3>
                        <p className="dd-parrafo">{detail.descripcion}</p>
                    </div>
                    <div className="detail-precio-stock">
                        <span className="detail-precio">${detail.precio}</span>
                        <p className="detail-stock">Stock disponible: {detail.stock} {detail.stock > 1 ? "unidades" : "unidad"}</p>
                    </div>
                    <ItemCount stock={detail.stock} initial= {1} onAdd={onAdd}/>
                </div>
            </div>
            
        </div>
    )
}

export default ItemDetail
