import React from 'react'
import { useContext } from 'react';
import { ProductsContext } from '../../Context/Context';


const CartItem = ( { cajas } ) => {

    const { removeCart, } = useContext(ProductsContext)

     console.log(cajas.nombre)
  return (

    <>
            <img src={cajas.img} alt="img" />

        <div>
            <p>titulo: {cajas.nombre}</p>
            <p>cantidad: {cajas.quantity}</p>
            <p>precio: {cajas.precio}</p>
            <p>subtotal: {cajas.quantity * cajas.precio}</p>

            <button onClick={()=> removeCart(cajas.id)}>Eliminar</button>
        </div>
   
    
    </>
   
  )
}

export default CartItem;