import {createContext, useContext, useState} from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    
    function agregarAlCarrito(item) {
        const findItem = cartList.find(i => i.detail.id === item.detail.id)
        if(findItem) {
            findItem.quantity = findItem.quantity + item.quantity
            setCartList(cartList)
        }
        else {
            setCartList(arr => [...arr, item])
        }
        
    }

    const mostrarListado = () => {
        console.log(cartList);
    }

    return (
        <CartContext.Provider value={{cartList, mostrarListado, agregarAlCarrito}}>
            {children}
        </CartContext.Provider>
    )
}


