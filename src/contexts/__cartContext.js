import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCart = ()=> useContext(CartContext)

export const CartContextProvider = ({ children }) =>{
const [cart, setCart] = useState({addedItems: [], totalprice : 0})

function addItem(item) {
    setCart({ ...cart, addedItems: [...cart.addedItems, item] })
    console.log(cart);
}
function clearCart() {
    setCart({addedItems: [], totalprice : 0})
}

function removeItem(id) {
    return (cart.addedItems.filter(curso => curso.id !==id))
}

function updateItem(id) {
    
}
function isInCart(id) {
    return (cart.addedItems.some(curso => curso.id ===id))
}
    return (
        <CartContext.Provider value={{cart, addItem, clearCart, removeItem, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}