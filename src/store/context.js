import React from 'react';


const Context = React.createContext({
    items: [],
    totalAmount: 0,
    addItems: (items)=> {},
    removeItems: (id)=>{},
    clearCart : (item, id) => {},
});

export default Context;