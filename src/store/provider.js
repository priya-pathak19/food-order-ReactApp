import React, { useReducer } from 'react';
import Context from './context';


const Provider = props =>{

    const defaultState= {
        items:[],
        totalAmount:0
    }

    const cartReducer = (state, action)=>{

        if (action.type === "ADD") {
            let updatedItems;
            const index = state.items.findIndex(el => el.id === action.item.id);
            if (index === -1) {
               updatedItems = [...state.items, action.item];
            } else {
               updatedItems = [...state.items];
               updatedItems[index].amount += action.item.amount;
            }
       
            return {
               items: updatedItems,
               totalAmount: state.totalAmount + action.item.price * action.item.amount
            };
         }
         if (action.type === "REMOVE") {
            let updatedItems;
            const index = state.items.findIndex(el => el.id === action.id);
            if (state.items[index].amount === 1) {
               updatedItems = state.items.filter(el => el.id !== action.id);
            } else {
               updatedItems = [...state.items];
               updatedItems[index].amount -= 1;
            }
       
            return {
               items: updatedItems,
               totalAmount: state.totalAmount - state.items[index].price
            };
         }
          return defaultState;
        };
        
    const [cartState, dispatch ]= useReducer(cartReducer, defaultState);

    const addItems = (item)=>{
        dispatch({type:"ADD", item:item})
    }

    const removeItems = (id)=>{
        dispatch({type:"REMOVE", id: id})
    }

    const clearCart = (item , id)=>{
        dispatch({type:"CLEAR", id: id , item : item})
    }

    const newContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItems:  addItems,
        removeItems: removeItems,
        clearCart : clearCart,
    };

    return (
        <Context.Provider value={newContext}>
             {props.children}
        </Context.Provider>
    )
}



export default Provider;