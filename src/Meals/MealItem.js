import React,{ useContext } from 'react';
import {
    Card, CardImg, CardText, CardSubtitle, CardBody,
  } from 'reactstrap';
  import MealItemForm from './MealItemForm';
  import './MealItem.css'
import Context from '../store/context';

const MealItem = props => {

    const cartCtx = useContext(Context);

    const addToCartHandler = amount => {
      cartCtx.addItems({
        id: props.id,
        name:props.name,
        amount:amount,
        price:props.price
      })
    }

    return(
        <React.Fragment>
       <div>
        <Card className="card">
        <CardImg top src={props.src} alt="Card image cap" />
        <CardBody >
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.name}</CardSubtitle>
          <CardText>{props.description}</CardText>
          <span >{props.price}</span>
          <MealItemForm id={props.id} onAddtoCart={addToCartHandler}/>
        </CardBody>
      </Card>
    </div>
        </React.Fragment>
    )
}

export default MealItem;