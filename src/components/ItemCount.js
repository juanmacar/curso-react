import { Button } from "@material-ui/core";

const ItemCount = (props)=>{



    return (
        <div>
            <h5>{props.nombre}</h5>
            <Button onClick={props.restar} disabled={props.count<=1 ? true : false} >-</Button>
            <span>{props.count}</span>
            <Button onClick={props.sumar} disabled={props.count>=props.stock ? true : false}>+</Button>
        </div>
    )
}
export default ItemCount