import '../styles.css';

function ItemDetail (props) {
  return (
    <div keys={props.id} className="cajaproducto" >
      <h1>{props.titulo}</h1>
      <h3>Precio: {props.precio} ARS</h3>
      <h4>Detalles:</h4>
      <p>{props.descripcion}</p>
      <img src={`images/${props.imagen}`} alt="" />
    </div>
  )
}
export default ItemDetail