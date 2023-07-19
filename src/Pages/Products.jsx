

import {Link} from "react-router-dom";

// Importe de lista de productos desde context
import { useContext } from 'react'
import { ProductsContext } from '../Context/Context'

import CardProduct from '../Components/Card/CardProduct';
import "./product.css"

const Products = () => {
    const { cajas } = useContext(ProductsContext);


  return (
    <>

<div><h1>Products</h1></div>
    < div className="container_products">


{cajas.map((cajas)=>{
    return (    

          <div key={cajas.id} > 

            <Link to={`/detail/${cajas.id}`}>       
              <CardProduct  cajas={cajas}/> 
            </Link>

          </div>)
})}
        
        
    
    </div>
    </>
  )
}

export default Products;