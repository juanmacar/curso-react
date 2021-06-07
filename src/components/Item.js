import '../styles.css';
import { Button } from "@material-ui/core";
import {NavLink } from "react-router-dom";

function Item (props) {
  return (
    <div className="cajaproducto" keys={props.id}>
      <h1>{props.titulo}</h1>
      <h3>Precio: {props.precio} ARS</h3>
      <NavLink to={`/detalles/${props.id}`}><Button>Ver detalles</Button></NavLink>
    </div>
  )
}
export default Item