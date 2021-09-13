import React, {useContext} from 'react';
import CartItem from './CartItem';
import Context from '../store/context';

const Cart = props => {
    const ctxCart = useContext(Context)
    const totalAmount = `$${ctxCart.totalAmount.toFixed(2)}`;

    const addItemFromCart = (item) =>{
        ctxCart.addItems({...item, amount:1});
    }
    
    
    const removeItemFromCart = (id) => {
        ctxCart.removeItems(id)
    }

    return(
        <React.Fragment>
       {ctxCart.items.map((item)=> <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onAdd={addItemFromCart.bind(null, item)}
        onRemove={removeItemFromCart.bind(null,item.id)}
       />)}
       <hr/>
        <div>
            <span>Total Amount : </span>
              <span style={{float:"right", marginRight:"130px"}}>{totalAmount}</span>
        </div>
        </React.Fragment>
    )
}

export default Cart;