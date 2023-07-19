import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { ProductsContext } from "../../Context/Context";


const CardWidget = () => {
  const { totalProduct } = useContext(ProductsContext);
  

  return (
    <>
      <div>
      
        <Link to="/cart">
          <LocalGroceryStoreIcon />
            <span className="contador-carrito">
              
              {totalProduct() || ""}</span>


        </Link>
      
      </div>
    </>
  );
};

export default CardWidget;
