import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { ProductsContext } from '../Context/Context';

import { useParams } from 'react-router-dom';
import { collection, query, getDocs, documentId, where} from "firebase/firestore";
import {db} from "../Components/Firebase/FirebaseConfig";



import Count from '../Components/Cart/Count';
import CartProduct from "../Components/Card/CardProduct"

import "./detail.css"



const Detail = () => {
  const { addCart , cajas} = useContext(ProductsContext)
 
const [caja, setCaja] = useState([]);

  let {id} = useParams();
            //para detail page
      useEffect(() => {
        
        const getCajas = async () =>{
        const q = query(collection(db, "cajas"),
                where(documentId(), "==", id));

        const caj = [];

        const querySnapshot = await getDocs(q)

        querySnapshot.forEach((doc) => {
        caj.push({ ...doc.data(), id: doc.id});
        });
        setCaja(caj);
        };
getCajas();

}, [id]);


//aqui paso la cantidad del countador mediante prorp hacia counter
  
const onAdd = (quantity) => {
      console.log(`compraste ${quantity} unidades`)
      addCart(caja, quantity);
  }
  return (
    <>
      <h1>Detalles Productos </h1>


    <div className='detailContainer'>
    

      <div key={caja.id}>
         {caja.map((cajas) =>{
          return <CartProduct   cajas={cajas}/>  ;
        })}

      </div>

      <div className='countContainer'>
          <div>Producto: {cajas.nombre}</div>
          <div>Descripcion: Elaborado en carton{cajas.descripcion}</div>
          <Count initial={1} stock={12} onAdd={onAdd} />
      </div>
    
    </div>
   </>

  )
}

export default Detail;