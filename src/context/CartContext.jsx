import {createContext, useContext, useState} from 'react'

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [itemCantidad, setItemCantidad] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
    
    function agregarAlCarrito(item) {
        setItemCantidad(itemCantidad + item.cantidad)
        setCartTotal(cartTotal + item.cantidad * item.detail.precio)
        const findItem = cartList.find(i => i.detail.id === item.detail.id)
        if(findItem) {
            findItem.cantidad = findItem.cantidad + item.cantidad
            setCartList(cartList)
        }
        else {
            setCartList(arr => [...arr, item])
        }
        
    }

    const removerItem = i => {
        const itemRemover = cartList.find (itemEnCarrito => itemEnCarrito.detail.id === i)
        setItemCantidad(itemCantidad - itemRemover.cantidad)
        setCartTotal(cartTotal - (itemRemover.detail.precio * itemRemover.cantidad))
        setCartList(cartList.filter(itemBuscado => itemBuscado.detail.id !== i))
    }

    const removerCarrito = () => {
        setItemCantidad(0)
        setCartTotal(0)
        setCartList([])
    }
    console.log(cartList);
    return (
        <CartContext.Provider value={{cartList, agregarAlCarrito, removerItem, removerCarrito, itemCantidad, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}


