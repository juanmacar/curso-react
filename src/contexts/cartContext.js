import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCart = ()=> useContext(CartContext)

export const CartContextProvider = ({ children }) =>{
const [cart, setCart] = useState({addedItems: [], totalprice : 0})

function addItem(item) {
    setCart({ ...cart, addedItems: [...cart.addedItems, item] })
}
function clearCart() {
    setCart({addedItems: [], totalprice : 0})
}

function removeItem() {

}
function isInCart() {

}
    return (
        <CartContext.Provider value={{cart, addItem, clearCart, removeItem, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}