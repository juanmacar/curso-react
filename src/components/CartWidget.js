import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Button } from "@material-ui/core";
import PurchaseForm from './PurchaseForm';
import { getFirestore } from '../firebase';

const styles = {
    "padding" : "10px",
    backgroundColor : "#dddddd"
}
const CartWidget = ()=> {
const [orderID, setOrderID] = useState("")//ID de la transacción
const cart = useCart();
const db = getFirestore();
const orders = db.collection("ordenes");
const dbcursos = db.collection("cursos");

async function sendOrder(order) { //función que manda la orden a la base de datos.
    let {id} = await orders.add(order);
    setOrderID(id);

    //actualizacion del stock de los productos comprados.
    const itemsWithNewStock = order.items.map(item => ({"id" : item.id, "cantidad" : item.cantidad}));
    for (const item of itemsWithNewStock) {
        let doc = await dbcursos.where("id", "==", item.id).get()
        let stock = parseInt(doc.docs.map(item => item.data().stock));
        let newstock = stock - item.cantidad;
        let docID = doc.docs.map(item => item.ref.id).toString()
        let doctoUpdate = dbcursos.doc(docID)
        doctoUpdate.update({stock : newstock})
    }
    
    //vaciar el carrito tras la compra exitosa
    cart.clearCart(); 
    
}
function generarOrden() {
let newOrder = {
    buyer : {name: buyerData.name, lastname: buyerData.lastname, email : buyerData.email},
    items : cart.cart.addedItems,
    date : new Date().getTime(),
    total : cart.cart.totalprice
    };
    sendOrder(newOrder)
}
//para pasar el formulario
const [buyerData, setBuyerData] = useState({name:"", lastname:"", email:""});
const updateForm = (evt)=> {
    setBuyerData({...buyerData, [evt.target.name] : evt.target.value })
}
if (orderID === "" && cart.cart.addedItems!==[]) {
return (
    <div style={styles}>
    {
        cart.cart.addedItems.map(curso => (
            <div>
                <strong>{curso.nombre}</strong> x {curso.cantidad} <Button onClick={()=>{cart.removeItem(curso.id)}}><span style={{color:"red"}}>Quitar</span></Button>
            </div>
        ))
    }
    <PurchaseForm updateForm={updateForm} buyerData={buyerData}/>
    <Button onClick={()=>{generarOrden()}} disabled={!(buyerData.name && buyerData.lastname && buyerData.email)}>Pagar</Button>
    
    </div>
)
}
return (
    <>
    <h2>¡Listo!</h2>
    <h3>Tu orden se procesó correctamente y su número es el {orderID}</h3>
    </>
)
}
export default CartWidget