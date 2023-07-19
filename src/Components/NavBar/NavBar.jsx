import { useState } from "react";

import "../../Components/NavBar/navbar.css";

import { Link } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";



const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">

      <div className="nav_logo">
        <Link to="/">
          {" "}
          <span> <h5 className="logo">GeoShop</h5></span>{" "}
        </Link>
      </div>


      <div className={`nav_items ${isOpen && "open"}`}>
        <Link className="li" to="/" onClick={handleToggle}>
          Home
        </Link>

        <Link className="li" to="/about" onClick={handleToggle}>
          About
        </Link>

        <Link className="li" to="/products" onClick={handleToggle}>
          Products
        </Link>
        
        <Link className="li" to="/contact" onClick={handleToggle}>
          Contact
        </Link>
      </div>


      
        <div className="container_cart">

            <div className="Cart_Widget">
                    <span>
                    {" "}
                    <CartWidget className={`nav_toggle ${isOpen && "open"}`} onClick={handleToggle} />
                    </span>
            </div>

            


            <div className={`nav_toggle ${isOpen && "open"}`} onClick={handleToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
      </div>
   


    </div>
  );
};

export default NavBar;
