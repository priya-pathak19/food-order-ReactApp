import React, { useState, useContext }  from 'react';

import { Navbar,NavbarBrand,Nav, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { Badge } from 'reactstrap';
import Cart from '../Cart/Cart'
 
import logo from '../assets/logo.png';
import cartLogo from '../assets/logo/cart.png';
import './Navbar.css'
import Context from '../store/context';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup.string().required("first name should not be empty"),
    lastName: yup.string().required("last name should not be empty"),
    pincode: yup.string().matches(/^[0-9]+$/, "Must be only digits").test('len', "must be 5 chares long", val=> val.length === 5).required(),
    street: yup.string().required("street should not be empty") 

    //if password and confirm password
    // password : yup.string().min(4).max(15).required(),
    // confirmPassword : yup.string().oneOf([yup.ref("password"),null])
})

const NavbarHeader = (props)=> {

    const { register, handleSubmit,reset , formState: { errors }  } = useForm({
     resolver: yupResolver(schema),
    })
    
      const [modal, setModal] = useState(false);
      const [Orderform, setORderform] = useState(false);


      const toggle = () => setModal(!modal);
      const toggleForm = () => setORderform(true);

      const ctx = useContext(Context);

      const hasItems = ctx.items.length > 0;

      const ctxVal = ctx.items.reduce((curr, item)=>{
        return curr + item.amount;
      },0);


      const submitOrderHandler = async (data) => {

       const userdata = {
        data,
        orderedItems: ctx.items,
       }


        const userSubmit = await fetch('https://react-foodorder-ea422-default-rtdb.firebaseio.com/orders.json', {
          method: 'POST',
          body: JSON.stringify({
            user : userdata,
            orderedItems: ctx.items,
          }),
        });
        console.log(userdata)
        ctx.clearCart();
        toggle();
        reset(userSubmit);
        setORderform(false);
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
        <ModalFooter>
          {!Orderform && <Button className="btn-cancel" onClick={toggle}>Cancel</Button>}
          {hasItems && !Orderform && <Button className="btn-order" onClick={toggleForm}>Order</Button>}
         
        </ModalFooter>
        {Orderform && <div>
          <form className="order-form" onSubmit={handleSubmit(submitOrderHandler)}>
            <div>
            <label htmlFor="Fname">First Name</label>
            <input id="Fname" name="firstName" type="text" {...register('firstName', { required: true })}/>
           <p>{errors.firstName?.message}</p>
            </div>
            <div>
            <label htmlFor="Lname">Last Name</label>
            <input id="Lname" name="lastName" type="text" {...register('lastName', { required: true })}/>
            <p>{errors.lastName?.message}</p>
            </div>
            <div>
            <label htmlFor="pin">PIN CODE</label>
            <input id="pin" name="pin" {...register('pincode', { required: true })}/>
            <p>{errors.pincode?.message}</p>
            </div>
            <div>
            <label htmlFor="street">Street</label>
            <input id="street" name="street" type="text" {...register('street', { required: true })}/>
            <p>{errors.street?.message}</p>
            </div>
            <button className="btn-cancel" onClick={toggle}>Cancel</button>
            <button className="btn-order" type="submit">Submit Order</button>
          </form>
        </div>}
      </Modal>
    </div>
        </Nav>
      </Navbar>
      </div>
        </React.Fragment>
    )
}

export default NavbarHeader;