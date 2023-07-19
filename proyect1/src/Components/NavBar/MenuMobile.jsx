import React from 'react'
import "./menuMobile.css"

import { useState } from 'react'

const MenuMobile = () => {
    const [open, setOpen ] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };
 
  return (
    <>
    <button onClick= {handleToggle}>
        
         open</button>

         
      <div className={open ? 'menu_mobil' : "open"}>
        
        

      Menu
    
    </div>
    </>

  )
}

export default MenuMobile