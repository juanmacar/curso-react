import ItemCount from './ItemCount';
import '../styles.css';

function Item (props) {
  return (
    <div className="cajaproducto" keys={props.id}>
      <h1>{props.titulo}</h1>
      <h3>Precio: {props.precio} ARS</h3>
      <ItemCount cantidad={1} stock={props.stock}/>
    </div>
  )
}
export default Item