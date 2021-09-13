import React, { useRef, useState } from 'react';
import Input from '../store/Input';
import './MealItem.css'

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const quantity = useRef();

    const onSubmithandler = (event) =>{
        event.preventDefault()
        const quantityRef = quantity.current.value;
        const refQuant = +quantityRef; 

        if (
            quantityRef.trim().length === 0 ||
            refQuant < 1 ||
            refQuant > 5
          ) {
            setAmountIsValid(false);
            return;
          }


        props.onAddtoCart(refQuant)
    }
    return(
        <React.Fragment>
          <form onSubmit={onSubmithandler}>
          
            <button className="Addbutton" type="submit" >
                <Input 
                ref={quantity}
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'}}/>
            Add</button>  {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
             </form>
        </React.Fragment>
    )
}

export default MealItemForm;