import '../styles.css';
import ItemCount from './ItemCount';
import { Button } from "@material-ui/core"
import { useState } from "react";
import { useCart } from '../contexts/cartContext';

function ItemDetail (props) {
  const cart = useCart();
  const [count, setCount] = useState(1);
  const [compraterminada, setCompraterminada] = useState(false);
  function sumar() {
      setCount(count+1)
  }
  function restar() {
          setCount(count-1)
  }
  function agregarAlCarrito() {
    setCompraterminada(true)
    cart.addItem({id : props.id, nombre: props.titulo, precio : props.precio})
    console.log(cart.cart);
  }
  const Boton = ()=> {
    let resultado = "";
    if (compraterminada) {
      resultado = <div style={{display:"block"}}><Button>Terminar compra</Button></div>;
    } else {
      resultado = <><ItemCount sumar={sumar} restar={restar} stock={props.stock} count={count}/><Button onClick={agregarAlCarrito}>Agregar al carrito</Button></>
    }
    return (resultado)
  }
  return (
    <div keys={props.id} className="cajaproducto" >
      <h1>{props.titulo}</h1>
      <h3>Precio: {props.precio} ARS</h3>
      <h4>Detalles:</h4>
      <p>{props.descripcion}</p>
      <img src={`images/${props.imagen}`} alt="" />
      <Boton></Boton>
    </div>
  )
}
export default ItemDetail