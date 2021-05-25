import ItemList from './itemList';

const ItemListContainer = (props)=> {

    return(
    <div>
        <h3>
            ¡Hola, {props.nombre}!
        </h3>
        <ItemList />
    </div>
    )}
export default ItemListContainer