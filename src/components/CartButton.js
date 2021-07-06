import {IconButton} from "@material-ui/core";
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import { useCart } from '../contexts/CartContext';
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

//estilos del indicador de cantidad de productos en el carrito
const styles = {
    "backgroundColor" : "#f00",
    "borderRadius" : "12px",
    "marginTop" : "20px",
    "marginLeft" : "-20px",
    "zIndex" : "10",
    "width" : "24px",
    "height" : "24px",
    "display" : "flex",
    "alignItems" : "center",
    "justifyContent" : "center"

}
const CartButton = ()=> {
    const [carrito, setCarrito] = useState(0);
    const cart = useCart();
    let total = 0
    for (const i of cart.cart.addedItems) {
        total = total + i.cantidad
    }
useEffect(
    ()=>{
        setCarrito(total)
    },
    [cart, total]
);
    return(
    <>
    <IconButton>
    <NavLink to={`/cart`} style={{"textDecoration": "none", "color" : "white"}}><LocalGroceryStoreOutlinedIcon /></NavLink>
    </IconButton>
    {carrito!==0 && <div style={styles}>{carrito}</div> /*indicador de cantidad de productos en el carrito*/} 
    </>
    )}
export default CartButton