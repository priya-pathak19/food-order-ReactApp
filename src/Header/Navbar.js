import React, { useState, useContext }  from 'react';

import { Navbar,NavbarBrand,Nav, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { Badge } from 'reactstrap';
import Cart from '../Cart/Cart'
 
import logo from '../assets/logo.png';
import cartLogo from '../assets/logo/cart.png';
import './Navbar.css'
import Context from '../store/context';
import Checkout from '../Cart/Checkout'

const NavbarHeader = (props)=> {
    
      const [modal, setModal] = useState(false);
      const [isCheckout, setIsCheckout] = useState(false);

      const toggle = () => setModal(!modal);

      const ctx = useContext(Context);

      const hasItems = ctx.items.length > 0;

      const ctxVal = ctx.items.reduce((curr, item)=>{
        return curr + item.amount;
      },0);

      const orderHandler = () => {
        setIsCheckout(true);
      };

      const modalActions = (
        <React.Fragment>
        <Button className="btn-cancel" onClick={toggle}>Cancel</Button>
        {hasItems && <Button className="btn-order" onClick={orderHandler}>Order</Button>}
        </React.Fragment>
      )

      const submitOrderHandler = async (userData) => {
        await fetch('https://food-order-reactapp-default-rtdb.firebaseio.com/orders.json', {
          method: 'POST',
          body: JSON.stringify({
            user: userData,
            orderedItems: ctx.items,
          }),
        });
        ctx.clearCart();
        toggle();
      };

    return(
        <React.Fragment>
            <div>
             <Navbar color="light" light expand="md" className="container-fluid fixed-top">
        <NavbarBrand className="navbar-brand ">
            <img src={logo} alt="Logoimage"/>
            Food Order
        </NavbarBrand>
        <Nav className=" ms-auto pe-5" navbar>
        <div>
        <button className="cart-btn" onClick={toggle}>
                <img src={cartLogo} alt="cartIcon" className="cartLogo"/>
                My Cart
                <Badge className="badge" style={{borderRadius:"10px"}}>{ctxVal}</Badge>
            </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}> <img src={cartLogo} alt="cartIcon" className="cartLogo"/> Your Cart</ModalHeader>
        <ModalBody>
            <Cart/>
        </ModalBody>
       
        {isCheckout? <Checkout onConfirm={submitOrderHandler} onCancel={toggle}/> : 
         <ModalFooter> {modalActions} </ModalFooter>}
        
        
      </Modal>
    </div>
            
        </Nav>
      </Navbar>
      </div>
        </React.Fragment>
    )
}

export default NavbarHeader;