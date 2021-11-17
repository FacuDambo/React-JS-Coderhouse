import {memo} from 'react'
import {Item} from '../Item/Item'

export const ItemList = memo (
    ({product}) => {
        return (
            <div className="itemList">
                {product.map(prod => <Item key={prod.id} detail={prod} />)}
            </div>
    )
    }
)