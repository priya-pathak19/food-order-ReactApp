import React from 'react';
import { Badge } from 'reactstrap';
// import Context from '../store/context';

const CartItem = props => {
    const price = `$${props.price.toFixed(2)}`;
    return(
    <React.Fragment>
              <div>
        <ul style={{border:"1px solid #ffe79e", padding:"10px"}}> 
            {props.name} 
            <Badge className="badge" style={{borderRadius:"10px"}}>{props.amount}</Badge>
             <button style={{float:"right", marginLeft:"5px"}} className="Addbutton" 
             onClick={props.onRemove}>- Remove</button> 

             <button style={{float:"right"}} className="Addbutton" onClick={props.onAdd}>
             + Add</button> 
             <span style={{float:"right", marginRight:"10px"}}>{price} </span> 
        </ul>
        </div>
    </React.Fragment>
    )
}


export default CartItem;