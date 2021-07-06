import '../styles.css';
import ItemCount from './ItemCount';
import { Button } from "@material-ui/core"
import { useState } from "react";
import { useCart } from '../contexts/CartContext';
import { NavLink } from "react-router-dom";

function ItemDetail (props) {
  const cart = useCart(); //traigo el contexto.
  const [count, setCount] = useState(1); //estado para la cantidad de unidades elegidas
  const [compraterminada, setCompraterminada] = useState(false); //estado para almacenar si la persona cliqueo el botón de compra terminada.
  
  function sumar() {//aumenta la cantidad de items a comprar
      setCount(count+1)
  }
  function restar() {//reduce la cantidad de items a comprar
          setCount(count-1)
  }
  function agregarAlCarrito() {
    setCompraterminada(true)//registro que terminó la selección.
    if (!cart.isInCart(props.id)) {
      cart.addItem({id : props.id, nombre: props.titulo, precio : props.precio, cantidad : count})//cargo el producto en el cart.
    }
  }
  const Boton = ()=> { //botón que renderiza de forma condicional, el boton de elegir cantidad o el de terminar compra.
    let resultado = ""; //variable para guardar el return
    if (compraterminada) {
      resultado = <div style={{display:"block"}}><NavLink to={`/cart`}><Button className="boton">Terminar compra</Button></NavLink></div>;
    } else {
      resultado = <><ItemCount sumar={sumar} restar={restar} stock={props.stock} count={count}/><Button onClick={agregarAlCarrito} className="boton">Agregar al carrito</Button></>
    }
    return (resultado)
  }
  return (
    <div keys={props.id} className="cajaproducto unproducto" >
      <img src={`../images/${props.imagen}`} alt="" />
      <h1>{props.titulo}</h1>
      <h3>Precio: {props.precio} ARS</h3>
      <h4>Detalles:</h4>
      <p>{props.descripcion}</p>
      {cart.isInCart(props.id) && <div className="alerta-producto-repetido">El producto ya está en tu carrito.</div>}
      <Boton></Boton>
    </div>
  )
}
export default ItemDetail
