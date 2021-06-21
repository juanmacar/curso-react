import {IconButton} from "@material-ui/core";
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import { useCart } from '../contexts/CartContext';
import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

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
    const [carrito, setCarrito] = useState([]);
    const cart = useCart();

useEffect(
    ()=>{
        setCarrito(cart.cart.addedItems)
    },
    [cart]
);
    return(
    <>
    <IconButton>
    <NavLink to={`/cart`}><LocalGroceryStoreOutlinedIcon /></NavLink>
    </IconButton>
    {carrito.length!==0 && <div style={styles}>{carrito.length}</div>}
    
    </>
    )}
export default CartButton