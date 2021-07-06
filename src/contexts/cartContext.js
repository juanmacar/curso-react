import { createContext, useState, useContext } from "react";
export const CartContext = createContext();
export const useCart = ()=> useContext(CartContext)
export const CartContextProvider = ({ children }) =>{
const [cart, setCart] = useState({addedItems: [], totalprice : 0})

function addItem(item) {
    setCart({ ...cart, addedItems: [...cart.addedItems, item], totalprice : (cart.totalprice + (item.precio * item.cantidad))})
}
function clearCart() {
    setCart({addedItems: [], totalprice : 0})
}

function removeItem(id) {
    setCart(
        { ...cart, addedItems: cart.addedItems.filter(curso => curso.id !==id)}
        )
}

//esta función se pensó para actualizar el stock cuando se agrega dos veces el mismo producto, pero no está en uso en esta versión hasta que este listo el sistema para asegurar que no se exceda el stock.
/* function updateItem(id, cantidad) {
    const modifiedItems = cart.addedItems.map(item => {
        if (item.id === id) {
            return { ...item, cantidad: item.cantidad + cantidad}
        }
        return item;
    });
    setCart({ ...cart, addedItems: modifiedItems })
} */
function isInCart(id) {
    return (cart.addedItems.some(curso => curso.id ===id))
}
    return (
        <CartContext.Provider value={{cart, addItem, clearCart, removeItem, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}
