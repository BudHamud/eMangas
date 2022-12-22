import { useState, createContext, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext) 

export const CartContextProvider = ({ children }) => {
    const [ cartList, setCartList ] = useState([])

    const vaciarCarrito = () => setCartList([])

    const buscarItem = (id) => cartList.find(e => e.id === id)

    const borrar = (id) => setCartList(cartList.filter(e => e.id !== id))

    const  agregarCarrito = (manga) =>{
        const idx = cartList.findIndex(e => e.id === manga.id ) // <- 
        if (idx !== -1) {  
            let cant = cartList[idx].cantidad
            cartList[idx].cantidad = cant + manga.cantidad
            setCartList( [ ...cartList ] ) 
        } else {
            setCartList([
                ...cartList,
                manga
            ])
        }
    }


    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            buscarItem,
            borrar
        }}>
            { children }
        </CartContext.Provider>
    )
}