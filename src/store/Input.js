import React from 'react';
import '../Meals/MealItem.css'

const Input = React.forwardRef((props, ref)=> {
    return <input className="inputNum"  ref={ref} {...props.input}/>
})

export default Input;