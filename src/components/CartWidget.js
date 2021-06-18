import { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Button } from "@material-ui/core";

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
function generarOrden() {
let compraFinal = {buyer : {name: "Juan", email : "juan@gmail.com", phone : 0}, items : carrito, total : 0};
console.log(compraFinal)
}
return (
    <div style={styles}>
    {
        carrito.map(curso => (
            <div>
                <strong>{curso.nombre}</strong> x {curso.cantidad} 
            </div>
        ))
    }
    <Button onClick={()=>{generarOrden()}}>Pagar</Button>
    </div>
)
}
export default CartWidget;