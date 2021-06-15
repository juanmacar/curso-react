import { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';

const styles = {
    "padding" : "10px",
    backgroundColor : "#dddddd"
}
const CartWidget = ()=> {
const [carrito, setCarrito] = useState([]);
const cart = useCart();
const displayCart = ()=>{
    setCarrito(cart.cart.addedItems)
}
useEffect(
    ()=>{displayCart()},
    [carrito]
);
return (
    <div style={styles}>
    {
        carrito.map(curso => (
            <div>
                <strong>{curso.nombre}</strong> x {curso.cantidad} 
            </div>
        ))
      }
      </div>
)
}
export default CartWidget;