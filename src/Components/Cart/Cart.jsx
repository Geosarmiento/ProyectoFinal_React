import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

import { useContext } from "react";
import { ProductsContext } from "../../Context/Context"

import "./cart.css"
import { collection, addDoc } from 'firebase/firestore';

import {db} from "../../Components/Firebase/FirebaseConfig";

import MessageSuccess from './MessageSuccess';

import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const inicialstate = {
  name: "",
  lastName: "",
  city: "",
};


const Cart = () => {

  const { cart, totalPrice, cajas } = useContext(ProductsContext);

  
  const [values, setValues] = useState(inicialstate);

  const [purschaseID, setPurschaseID ] = useState(null)

  const handleOnChance = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name] : value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "Compras" ),{
      values,
    });

    //console.log("documente Id", docRef.id);
    setPurschaseID(docRef.id);

    setValues(inicialstate)

  };

  if(cart.length === 0){

      

    return(

      <>
      <p>No hay element</p>
      <Link to="/products"> Volver</Link>

      </>
    );
  }

  return (
    <>
    
    <div className='container'>
      <h1>Cart</h1>

        <form className='formcontainer' onSubmit={onSubmit}>
          <TextField
            placeholder='Name'
            name='name'
            value={values.name}
            onChange={handleOnChance}>
          </TextField>

          <TextField
            placeholder='Last Name'
            name='lastName'
            value={values.lastName}
            onChange={handleOnChance}>
          </TextField>

          <TextField
            placeholder='City'
            name='city'
            value={values.city}
            onChange={handleOnChance}>
          </TextField>

          <button >

            enviar
          </button>


        </form>
        
          {purschaseID ? <MessageSuccess purschaseID={purschaseID}/> : null}
    </div>

      <div className='containerItem'>
        <div key={cajas.id}>
              {cart.map(cajas => <CartItem  cajas={cajas}/>)} 
              
              <p>Total : {totalPrice()}</p>
              
         </div>
      </div>
    
    </>
  )
}

export default Cart;