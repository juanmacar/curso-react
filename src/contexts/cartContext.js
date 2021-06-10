import { createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const useCart = ()=> useContext(CartContext)

export const CartContextProvider = ({ children }) =>{
const [cart, setCart] = useState({addedItems: [], totalprice : 0})

function addItem(item) {
    setCart({ ...cart, addedItems: [...cart.addedItems, item], totalprice : (cart.totalprice + (item.precio * item.cantidad))})
    console.log(cart);
}
function clearCart() {
    setCart({addedItems: [], totalprice : 0})
}

function removeItem(id) {
    return (cart.addedItems.filter(curso => curso.id !==id))
}

function updateItem(id, cantidad) {
    const modifiedItems = cart.addedItems.map(item => {
        if (item.id === id) {
            return { ...item, cantidad: item.cantidad + cantidad}
        }
        return item;
    });
    setCart({ ...cart, addedItems: modifiedItems })
}
function isInCart(id) {
    return (cart.addedItems.some(curso => curso.id ===id))
}
    return (
        <CartContext.Provider value={{cart, addItem, clearCart, removeItem, isInCart, updateItem}}>
            {children}
        </CartContext.Provider>
    )
}