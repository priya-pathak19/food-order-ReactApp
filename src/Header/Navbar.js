import React, { useState, useContext }  from 'react';

import { Navbar,NavbarBrand,Nav, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { Badge } from 'reactstrap';
import Cart from '../Cart/Cart'
 
import logo from '../assets/logo.png';
import cartLogo from '../assets/logo/cart.png';
import './Navbar.css'
import Context from '../store/context';

const NavbarHeader = (props)=> {
    
      const [modal, setModal] = useState(false);

      const toggle = () => setModal(!modal);

      const ctx = useContext(Context);

      const hasItems = ctx.items.length > 0;

      const ctxVal = ctx.items.reduce((curr, item)=>{
        return curr + item.amount;
      },0);

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
        <ModalFooter>
          <Button className="btn-cancel" onClick={toggle}>Cancel</Button>
          {hasItems && <Button className="btn-order" onClick={toggle}>Order</Button>}
          
        </ModalFooter>
      </Modal>
    </div>
            
        </Nav>
      </Navbar>
      </div>
        </React.Fragment>
    )
}

export default NavbarHeader;