import '../styles.css';

const PurchaseForm = (props)=> {
    return (
        <div className="form">
        <label>Nombre:</label>
        <input type="text" name="name" value={props.buyerData.name} onChange={props.updateForm}/><br/>
        <label>Apellido:</label>
        <input type="text" name="lastname" value={props.buyerData.lastname} onChange={props.updateForm}/><br/>
        <label>Email:</label>
        <input type="text" name="email" value={props.buyerData.email} onChange={props.updateForm}/><br/>
        </div>
    )
}
export default PurchaseForm