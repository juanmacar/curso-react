import { Button } from "@material-ui/core";
import { useState } from "react";

const ItemCount = (props)=>{

const [count, setCount] = useState(props.cantidad);
function sumar() {
    if (count < props.stock) {
    setCount(count+1)
    }
}
function restar() {
    if (count > 1) {
    setCount(count-1)
    }
}

    return (
        <div>
            <h5>{props.nombre}</h5>
            <Button onClick={restar}>-</Button>
            <span>{count}</span>
            <Button onClick={sumar}>+</Button>
        </div>
    )
}
export default ItemCount